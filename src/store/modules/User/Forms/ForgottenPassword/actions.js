import http from "@/api";
import router from "@/router";
import types from "./types";

const forgotPassword = ({ commit, dispatch }, payload) => {
  commit(types.START_LOADING);
  http
    .patch("auth/reset/", payload)
    .then(
      () => {
        router.push({ name: "auth" });
        dispatch("SnackBar/toggleSnackBar", "forgottenPasswordSuccess", {
          root: true
        });
      },
      error => {
        commit(types.SET_EMAIL_ERRORS, error.response.data.email);
      }
    )
    .finally(() => commit(types.END_LOADING));
};

const resetEmailErrors = ({ commit }) => commit(types.CLEAR_ERRORS);

export default { forgotPassword, resetEmailErrors };
