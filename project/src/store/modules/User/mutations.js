import types from "./types";

import cookie from "@/utils/cookie.js";
import api from "@/api.js";

const authenticated = (state, obj) => {
  state.token = obj.token;
  state.authenticated = true;
  api.defaults.headers.common["Authorization"] = "Token " + obj.token;
  cookie.set("Token", obj.token, 7);
};

const anonym = state => {
  state.authenticated = false;
  delete api.defaults.headers.common["Authorization"];
  cookie.remove("Token");
};

const failure = state => (state.authenticated = false);

const userInfo = (state, obj) => (state.user = obj);

export default {
  [types.AUTHENTICATED]: authenticated,
  [types.ANONYM]: anonym,
  [types.LOGIN_FAILURE]: failure,
  [types.USER_INFO]: userInfo
};
