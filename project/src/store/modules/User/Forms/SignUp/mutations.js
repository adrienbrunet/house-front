import Vue from "vue";
import types from "./types";

const startLoading = state => (state.loading = true);
const endLoading = state => (state.loading = false);
const clearErrors = state => (state.errors = {});
const setErrors = (state, errors) => Vue.set(state, "errors", errors || {});
const resetFieldErrors = (state, key) => Vue.set(state.errors, key, []);
const setPasswordMatchErrors = state =>
  Vue.set(state.errors, "non_field_errors", ["Passwords don't match."]);

export default {
  [types.START_LOADING]: startLoading,
  [types.END_LOADING]: endLoading,
  [types.CLEAR_ERRORS]: clearErrors,
  [types.SET_ERRORS]: setErrors,
  [types.RESET_FIELD_ERRORS]: resetFieldErrors,
  [types.SET_PASSWORD_MATCH_ERRORS]: setPasswordMatchErrors
};
