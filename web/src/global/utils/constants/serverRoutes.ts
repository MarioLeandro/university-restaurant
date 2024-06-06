import queryString from "query-string";

export default {
  auth: {
    session: (
      type = "",
      query?: {
        [key: string]: string;
      }
    ) => queryString.stringifyUrl({ url: `/session${type}`, query }),
  },
  view: {
    menu: (value = "") => `/menu${value}`,
  },
  management: {
    dishes: (value = "") => `/dishes${value}`,
  },
};
