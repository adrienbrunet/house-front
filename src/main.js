import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueTimeago from "vue-timeago";

Vue.config.productionTip = false;

Vue.use(VueTimeago, {
  name: "Timeago", // Component name, `Timeago` by default
  locale: "en", // Default locale
  locales: {
    fr: require("date-fns/locale/fr")
  }
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters["User/isAuthenticated"]) {
      next({
        name: "auth",
        query: {
          redirect: to.fullPath
        }
      });
      return;
    }
  }
  if (to.matched.some(record => record.meta.redirectToHomeWhenAuth)) {
    // this route is not relevant when Auth, redirect to home
    if (store.getters["User/isAuthenticated"]) {
      next({ name: "home" });
      return;
    }
  }
  next();
});

store.watch(
  state => state.User.authenticated,
  isAuthenticated => {
    let currentQuery = router.history.current.query;
    if (isAuthenticated) {
      router.push(
        (currentQuery && currentQuery.redirect) || { name: "home" }
      );
    } else {
      router.push({
        name: "auth",
        query: {
          redirect: router.history.current.path
        }
      });
    }
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
