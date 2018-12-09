<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          ripple
          value="true"
          v-for="(item, i) in items"
          :key="i"
          v-on="{ click: item.action || noop }"
          :to="item.action ? null : item.to || null"
          v-show="!item.authRequired || authenticated"
        >
          <v-list-tile-action>
            <v-icon color="primary" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "home",
          title: "Home",
          to: "/",
          authRequired: false
        },
        {
          icon: "account_circle",
          title: "Profile",
          to: "/profile",
          authRequired: true
        },
        {
          icon: "info",
          title: "About",
          to: "/about",
          authRequired: false
        },
        {
          icon: "exit_to_app",
          title: "Logout",
          action: () => this.$store.dispatch("User/logout"),
          authRequired: true
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "House"
    };
  },
  mounted() {
    this.$store.dispatch("User/authenticateWithCookie");
  },
  computed: mapState("User", {
    authenticated: "authenticated"
  }),
  methods: {
    noop() {}
  }
};
</script>
