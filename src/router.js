import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: () =>
        import(/* webpackChunkName: "auth" */ "./views/Auth.vue"),
      meta: {
        redirectToHomeWhenAuth: true
      }
    },
    {
      path: "/auth/:confirmToken",
      name: "authConfirm",
      component: () =>
        import(/* webpackChunkName: "auth" */ "./views/Auth.vue"),
      meta: {
        redirectToHomeWhenAuth: true
      }
    },
    {
      path: "/auth/:confirmToken",
      component: () => import(/* webpackChunkName: "auth" */ "./views/Auth.vue")
    },
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: () =>
        import(/* webpackChunkName: "auth" */ "./views/SignUp.vue"),
      meta: {
        redirectToHomeWhenAuth: true
      }
    },
    {
      path: "/forgotten-password",
      name: "forgotten-password",
      component: () =>
        import(/* webpackChunkName: "auth" */ "./views/ForgottenPassword.vue")
    },
    {
      path: "/password-reset-confirm/:uid/:token",
      name: "reset-password-confirm",
      component: () =>
        import(/* webpackChunkName: "auth" */ "./views/ResetPasswordConfirm.vue"),
      meta: {
        redirectToHomeWhenAuth: true
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "profile" */ "./views/Profile.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "*",
      component: () =>
        import(/* webpackChunkName: "notfound" */ "./views/NotFound.vue")
    }
  ]
});
