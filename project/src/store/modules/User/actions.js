import http from "@/api";
import store from "@/store";

import types from "./types";

// This emitAuthenticated trigger onAuth on all registered modules
const emitAuthenticated = ({ dispatch }) => {
  const modules = Object.keys(store._modules.root._children);
  for (let i = 0; i < modules.length; i++) {
    if (modules[i] !== "route") {
      try {
        dispatch(modules[i] + "/onAuth", {}, { root: true });
      } catch (err) {
        console.log("onAuthError", err);
      }
    }
  }
};

const onAuth = ({ dispatch }) => dispatch("getUserInfo");

const authenticateWithCookie = ({ commit, getters, dispatch }) => {
  if (getters.getCookie("Token")) {
    commit(types.AUTHENTICATED, { token: getters.getCookie("Token") });
    dispatch("emitAuthenticated");
  }
};

const logout = ({ commit }) => commit(types.ANONYM);

const getUserInfo = ({ commit }) => {
  http.get("/me/").then(response => commit(types.USER_INFO, response.data));
};

export default {
  emitAuthenticated,
  onAuth,
  authenticateWithCookie,
  getUserInfo,
  logout
};
