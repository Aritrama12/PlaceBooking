// import axios from "axios";
// import qs from "qs";

// export const axiosInstance = axios.create({
//   baseURL: "/api/",
//   withCredentials: true,
//   paramsSerializer: (params) =>
//     qs.stringify(params, { arrayFormat: "repeat" }),
// });


import axios from "axios";
import qs from "qs";

const API_BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_BASE_URL
  : "/api/";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "repeat" }),
});
