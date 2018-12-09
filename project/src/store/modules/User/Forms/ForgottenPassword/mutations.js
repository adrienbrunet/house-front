import Vue from "vue";
import types from "./types";

const startLoading = state => (state.loading = true);

const endLoading = state => (state.loading = false);

const clearErrors = state => (state.errors = {});

const setEmailErrors = (state, errors) =>
  Vue.set(state.errors, "email", errors);

export default {
  [types.START_LOADING]: startLoading,
  [types.END_LOADING]: endLoading,
  [types.CLEAR_ERRORS]: clearErrors,
  [types.SET_EMAIL_ERRORS]: setEmailErrors
};
