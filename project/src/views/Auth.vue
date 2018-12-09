<template>
<v-container fluid grid-list-lg>
  <v-slide-y-transition mode="out-in">
    <v-flex md6 offset-md3>

      <v-snackbar
        v-model="snackbarForgottenPassword"
        :timeout="6000"
        :top="true"
        color="success"
      >
        An email will be sent to the address you provided.
        <v-btn
          flat
          @click="toggleSnackBarForgottenPassword"
        >
          Close
        </v-btn>
      </v-snackbar>

      <v-snackbar
        v-model="snackbarResetPassword"
        :timeout="6000"
        :top="true"
        color="success"
      >
        Your password has been updated. You can now try to log in.
        <v-btn
          flat
          @click="toggleSnackBarResetPassword"
        >
          Close
        </v-btn>
      </v-snackbar>

      <v-layout row wrap>
        <v-flex xs12 sm12 md12>
          <login-card></login-card>
        </v-flex>
      </v-layout>

    </v-flex>
  </v-slide-y-transition>
</v-container>
</template>

<script>
import { mapActions } from "vuex";
import LoginCard from "@/components/cards/LoginCard";

export default {
  components: {
    LoginCard
  },
  computed: {
    snackbarForgottenPassword: {
      get() {
        return this.$store.state.SnackBar.forgottenPasswordSuccess;
      },
      set() {
        this.toggleSnackBar("forgottenPasswordSuccess");
      }
    },
    snackbarResetPassword: {
      get() {
        return this.$store.state.SnackBar.resetPasswordSuccess;
      },
      set() {
        this.toggleSnackBar("resetPasswordSuccess");
      }
    }
  },
  methods: {
    ...mapActions("SnackBar", ["toggleSnackBar"]),
    toggleSnackBarForgottenPassword() {
      this.toggleSnackBar("forgottenPasswordSuccess");
    },
    toggleSnackBarResetPassword() {
      this.toggleSnackBar("resetPasswordSuccess");
    }
  }
};
</script>
