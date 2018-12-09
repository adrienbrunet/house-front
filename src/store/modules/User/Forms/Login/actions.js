import http from "@/api";
import types from "./types";
import userTypes from "../../types";

const authenticate = ({ commit, dispatch }, payload) => {
  commit(types.START_LOADING);
  http
    .post("/auth/login/", payload)
    .then(
      response => {
        commit("User/" + userTypes.AUTHENTICATED, response.data, {
          root: true
        });
        commit(types.CLEAR_ERRORS);
        dispatch("User/emitAuthenticated", {}, { root: true });
      },
      error => {
        commit(types.SET_ERRORS, error.response.data);
        commit("User/" + userTypes.LOGIN_FAILURE, null, { root: true });
      }
    )
    .finally(() => commit(types.END_LOADING));
};

const resetPasswordErrors = ({ commit }) => {
  commit(types.RESET_PASSWORD_ERROR);
};

export default { authenticate, resetPasswordErrors };
