import types from "./types";

const toggleSnackBar = (state, value) => (state[value] = !state[value]);

export default {
  [types.TOGGLE_SNACKBAR]: toggleSnackBar
};
