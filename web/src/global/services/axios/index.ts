import axios from "axios";
import { signOut } from "next-auth/react";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = cookies().get("@RU/tk")?.value;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      cookies().delete("@RU/tk");
      signOut();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
