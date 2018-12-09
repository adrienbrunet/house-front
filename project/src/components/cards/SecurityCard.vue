<template>
  <v-card>
    <v-snackbar
      v-model="snackbar"
      :timeout="6000"
      :top="true"
      color="success"
    >
      Your password has been updated successfully.
      <v-btn
        flat
        @click="toggleSnackBarChangePassword"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-toolbar dark color="primary">
      <v-btn icon>
        <v-icon>security</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">Security</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      Last login: <timeago :datetime="lastLogin"></timeago>
    </v-card-text>
    <v-card-actions>
      <v-btn flat @click="toggleDisplay">Change Password</v-btn>
    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="display">
        <change-password-form></change-password-form>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import { mapActions } from "vuex";

export default {
  computed: {
    snackbar: {
      get() {
        return this.$store.state.SnackBar.changePasswordSuccess;
      },
      set() {
        this.toggleSnackBar("changePasswordSuccess");
      }
    },
    display() {
      return this.$store.state.User.Forms.ChangePassword.display;
    },
    lastLogin() {
      return this.$store.state.User.user.lastLogin;
    }
  },
  components: {
    ChangePasswordForm
  },
  methods: {
    ...mapActions("SnackBar", ["toggleSnackBar"]),
    toggleDisplay() {
      this.$store.dispatch("User/Forms/ChangePassword/toggleDisplay");
    },
    toggleSnackBarChangePassword() {
      this.toggleSnackBar("changePasswordSuccess");
    }
  }
};
</script>
