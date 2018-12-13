import http from "@/api";
import types from "./types";

const resetPasswordErrors = ({ commit }) =>
  commit(types.RESET_FIELD_ERRORS, "password");

const resetEmailErrors = ({ commit }) =>
  commit(types.RESET_FIELD_ERRORS, "email");

const setErrorPasswordsMatch = ({ commit }) =>
  commit(types.SET_PASSWORD_MATCH_ERRORS);

const signUp = ({ commit, dispatch }, payload) => {
  commit(types.START_LOADING);
  http
    .post("/auth/signup/", payload)
    .then(
      () => {
        commit(types.CLEAR_ERRORS);
        dispatch("SnackBar/toggleSnackBar", "signUpSuccess", {
          root: true
        });
      },
      error => {
        commit(types.SET_ERRORS, error.response.data);
      }
    )
    .finally(() => commit(types.END_LOADING));
};

export default {
  resetEmailErrors,
  resetPasswordErrors,
  setErrorPasswordsMatch,
  signUp
};
