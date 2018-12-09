import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

import Forms from "./Forms";

const namespaced = true;

const store = {
  namespaced,
  state() {
    return {
      authenticated: false,
      user: {},
      token: ""
    };
  },
  actions,
  getters,
  mutations,
  modules: {
    Forms: Forms
  }
};

export default store;
