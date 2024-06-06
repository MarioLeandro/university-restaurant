export default {
  view: {
    LOGIN: "/login/",
    HOME: "/",
  },
  management: {
    HOME: "/",
    DISHES: (dishId = ""): string => `/dishes${dishId}/`,
  },
};
