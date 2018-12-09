import cookie from "@/utils/cookie.js";

const isAuthenticated = state => state.authenticated;

const getCookie = () => key => cookie.get(key);

export default {
  isAuthenticated,
  getCookie
};
