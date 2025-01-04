import axios from "axios";
import { getToken } from "./functions";

const http = axios.create({
  baseURL: "https://api.spotify.com/v1/browse",
});

http.interceptors.request.use(async (config) => {
  const authToken = localStorage.getItem("token");
  if (authToken) {
    config.headers.Authorization = authToken;
  } else {
    await getToken();
    config.headers.Authorization = authToken;
  }
  return config;
});

export { http };
