import Vue from "vue";
import types from "./types";

const startLoading = state => (state.loading = true);
const endLoading = state => (state.loading = false);
const clearErrors = state => (state.errors = {});
const setErrors = (state, errors) => Vue.set(state, "errors", errors || {});
const resetPasswordError = state => (state.errors.password = []);

export default {
  [types.START_LOADING]: startLoading,
  [types.END_LOADING]: endLoading,
  [types.CLEAR_ERRORS]: clearErrors,
  [types.SET_ERRORS]: setErrors,
  [types.RESET_PASSWORD_ERROR]: resetPasswordError
};
