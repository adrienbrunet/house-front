import http from "@/api";
import router from "@/router";
import types from "./types";

const resetNewPasswordErrors = ({ commit }) =>
  commit(types.RESET_FIELD_ERRORS, "newPassword");

const setErrorPasswordsMatch = ({ commit }) =>
  commit(types.SET_PASSWORD_MATCH_ERRORS);

const resetPassword = ({ commit, dispatch }, payload) => {
  commit(types.START_LOADING);
  http
    .patch("auth/reset/", payload)
    .then(
      () => {
        commit(types.CLEAR_ERRORS);
        router.push({ name: "auth" });
        dispatch("SnackBar/toggleSnackBar", "resetPasswordSuccess", {
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
  resetNewPasswordErrors,
  setErrorPasswordsMatch,
  resetPassword
};
