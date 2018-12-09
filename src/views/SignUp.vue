<template>
<v-container fluid grid-list-lg>
  <v-flex md6 offset-md3>

    <v-snackbar
      v-model="snackbarSignUp"
      :timeout="6000"
      :top="true"
      color="success"
    >
      We sent you an email to confirm your account. Chech your emails.
      <v-btn
        flat
        @click="toggleSnackBarSignUp"
      >
        Close
      </v-btn>
    </v-snackbar>

    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <sign-up-card></sign-up-card>
      </v-flex>

    </v-layout>
  </v-flex>
</v-container>
</template>

<script>
import { mapActions } from "vuex";
import SignUpCard from "@/components/cards/SignUpCard";

export default {
  components: {
    SignUpCard
  },
  computed: {
    snackbarSignUp: {
      get() {
        return this.$store.state.SnackBar.signUpSuccess;
      },
      set() {
        this.toggleSnackBar("signUpSuccess");
      }
    }
  },
  methods: {
    ...mapActions("SnackBar", ["toggleSnackBar"]),
    toggleSnackBarSignUp() {
      this.toggleSnackBar("signUpSuccess");
    }
  }
};
</script>
