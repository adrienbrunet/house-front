import Vue from "vue";
import Vuex from "vuex";

import User from "./modules/User";
import SnackBar from "./modules/SnackBar";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: User,
    SnackBar: SnackBar
  }
});

export default store;
