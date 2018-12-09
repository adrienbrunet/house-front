import actions from "./actions";
import mutations from "./mutations";

const namespaced = true;

export default {
  namespaced,
  state() {
    return {
      loading: false,
      errors: {},
      display: true
    };
  },
  actions,
  mutations
};
