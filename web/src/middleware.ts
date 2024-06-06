// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routes, serverRoles } from "@app/global/utils";

const addBasepath = (route: string) => `/view${route}`;
const PUBLIC_ROUTES = [addBasepath(routes.view.LOGIN)];
const HYBRID_ROUTES = [addBasepath(routes.view.HOME)];
const PRIVATE_ROUTES_PERMISSION = {
  [addBasepath(routes.management.DISHES())]: [serverRoles.MANAGER.name],
};
const ALLOWED_ROUTES = PUBLIC_ROUTES.concat(HYBRID_ROUTES).concat(
  Object.keys(PRIVATE_ROUTES_PERMISSION)
);

function isCurrentRouteIncluded(currentRoute: string) {
  return (routes: string[]) =>
    routes.some((route) => {
      if (!route.includes("/*")) return route === currentRoute;
      const splittedRoute = route.split("/");
      if (!currentRoute.includes(route.replace("/*", ""))) return false;
      return currentRoute.split("/").length === splittedRoute.length;
    });
}

function AuthMiddleware(request: NextRequest, response: NextResponse) {
  const appName = process.env["NEXT_PUBLIC_APP_ID"] as string;
  const cookies = request.cookies;

  const token = `@${appName}/tk`;
  //   const refreshToken = `@${appName}/rtk`;
  const userCookie = cookies.get(`@${appName}/usr`)?.value;
  let userPermissions = [];
  if (userCookie) {
    userPermissions = JSON.parse(userCookie);
  }

  const currentRoute = request.nextUrl.basePath.concat(
    !request.nextUrl.pathname.endsWith("/")
      ? `${request.nextUrl.pathname}/`
      : request.nextUrl.pathname
  );

  const isCurrentRouteIncludedIn = isCurrentRouteIncluded(currentRoute);
  const isCurrentRoutePublic = isCurrentRouteIncludedIn(PUBLIC_ROUTES);
  const isCurrentRouteHybrid = isCurrentRouteIncludedIn(HYBRID_ROUTES);

  if (
    ["_next", "favicon.ico", "/api/"].some((nonRoute) =>
      currentRoute.includes(nonRoute)
    )
  ) {
    return [false, response];
  }

  const screenURL = new URL(addBasepath(routes.view.HOME), request.url);
  screenURL.search = request.nextUrl.search;

  /* Should redirect to private route */
  const isUserSignedInAtPublicPage =
    isCurrentRoutePublic && !!cookies.get(token);
  if (isUserSignedInAtPublicPage) {
    return [true, NextResponse.redirect(screenURL)];
  }

  /* Should Logout */
  const isUserSignedOutAtPrivatePage =
    !isCurrentRoutePublic && !isCurrentRouteHybrid;
  if (isUserSignedOutAtPrivatePage) {
    response.cookies.delete(token); //https://nextjs.org/docs/messages/middleware-upgrade-guide
    screenURL.pathname = addBasepath(routes.view.LOGIN);
    return [true, NextResponse.redirect(screenURL)];
  }

  /* Should redirect to allowed page */
  const isCurrentRouteNotAllowed = !isCurrentRouteIncludedIn(ALLOWED_ROUTES);
  if (isCurrentRouteNotAllowed) {
    return [true, NextResponse.redirect(screenURL)];
  }

  const isCurrentRouteNotAllowedToHUB =
    PRIVATE_ROUTES_PERMISSION[currentRoute]?.length &&
    PRIVATE_ROUTES_PERMISSION[currentRoute].some((routePermission) => {
      return !userPermissions.includes(routePermission);
    });
  if (isCurrentRouteNotAllowedToHUB) {
    return [true, NextResponse.redirect(screenURL)];
  }

  return [false, response];
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  /* Authorized Routes */
  const [shouldReturn, responseAuth] = AuthMiddleware(request, response);
  if (shouldReturn) return responseAuth;

  return response;
}

export const config = {
  matcher: [
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
    addBasepath(routes.view.HOME),
    `${addBasepath(routes.view.LOGIN)}:path*`,
    addBasepath(routes.management.DISHES()),
    `${addBasepath(routes.management.DISHES())}:path*`,
  ],
};
