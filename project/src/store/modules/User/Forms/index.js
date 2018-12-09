import Login from "./Login";
import ChangePassword from "./ChangePassword";
import ForgottenPassword from "./ForgottenPassword";
import ResetPasswordConfirm from "./ResetPasswordConfirm";
import SignUp from "./SignUp";

const namespaced = true;

const store = {
  namespaced,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Login: Login,
    ChangePassword: ChangePassword,
    ForgottenPassword: ForgottenPassword,
    ResetPasswordConfirm: ResetPasswordConfirm,
    SignUp: SignUp
  }
};

export default store;
