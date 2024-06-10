import axiosInstance from "@app/global/services/axios";
import { serverRoutes } from "@app/global/utils";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";

const nextAuthOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, req) {
        if (!credentials) return null;

        const response = await axiosInstance.post(serverRoutes.auth.session(), {
          email: credentials.email,
          password: credentials.password,
        });

        const { user, token } = await response.data;

        if (token && response.status === 200) {
          cookies().set("@RU/tk", token);

          return {
            id: user.id,
            manager: user.manager,
            name: user.name,
            email: user.email,
            purchased: user.purchased,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/view/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
