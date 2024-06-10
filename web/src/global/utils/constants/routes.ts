export default {
  view: {
    HOME: "/view",
  },
  management: {
    HOME: "/management",
    DISHES: (dishId = ""): string => `/management/dishes${dishId}/`,
  },
  auth: {
    LOGIN: "/",
    REGISTER: "/register",
  },
};
