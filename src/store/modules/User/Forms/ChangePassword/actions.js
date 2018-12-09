import http from "@/api";
import types from "./types";

const resetOldPasswordErrors = ({ commit }) =>
  commit(types.RESET_FIELD_ERRORS, "oldPassword");

const resetNewPasswordErrors = ({ commit }) =>
  commit(types.RESET_FIELD_ERRORS, "newPassword");

const setErrorPasswordsMatch = ({ commit }) =>
  commit(types.SET_PASSWORD_MATCH_ERRORS);

const toggleDisplay = ({ commit }) => commit(types.TOGGLE_DISPLAY);

const updatePassword = ({ commit, dispatch }, payload) => {
  commit(types.START_LOADING);
  http
    .put("/me/password/", payload)
    .then(
      () => {
        commit(types.CLEAR_ERRORS);
        commit(types.TOGGLE_DISPLAY);
        dispatch("SnackBar/toggleSnackBar", "changePasswordSuccess", {
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
  resetOldPasswordErrors,
  resetNewPasswordErrors,
  setErrorPasswordsMatch,
  toggleDisplay,
  updatePassword
};
