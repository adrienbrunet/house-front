import actions from "./actions";
import mutations from "./mutations";

const namespaced = true;

export default {
  namespaced,
  state() {
    return {
      changePasswordSuccess: false,
      resetPasswordSuccess: false,
      forgottenPasswordSuccess: false,
      signUpSuccess: false
    };
  },
  actions,
  mutations
};
