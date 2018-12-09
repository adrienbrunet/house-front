import axios from "axios";
import store from "@/store";
import cookie from "@/utils/cookie.js";

const DOMAIN =
  process.env.NODE_ENV === "production" ? "" : "http://127.0.0.1:8000";

const http = axios.create({
  baseURL: DOMAIN + "/api",
  headers: {
    "Content-Type": "application/json"
  }
});

http.interceptors.request.use(
  config => {
    if (["post", "put", "patch", "delete"].indexOf(config.method) !== -1) {
      config.headers["X-CSRFToken"] = cookie.get("csrftoken");
    }
    if (store.state.token) {
      config.headers["Authorization"] = "Token " + store.state.token;
    } else {
      let token = store.getters["User/getToken"];
      if (token) {
        config.headers["Authorization"] = "Token " + token;
      }
    }
    return config;
  },
  error => Promise.reject(error)
);

http.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      store.dispatch("User/logout");
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export default http;
