import types from "./types";

const toggleSnackBar = ({ commit }, snackbar) =>
  commit(types.TOGGLE_SNACKBAR, snackbar);

const onAuth = () => {};

export default {
  toggleSnackBar,
  onAuth
};
