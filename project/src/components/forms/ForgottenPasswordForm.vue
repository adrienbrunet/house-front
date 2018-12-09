<template>
  <div class="forgotten-password-form">
    <v-form
      v-model="valid"
      @submit.prevent="sendMail()"
      @keyup.native.enter="sendMail()"
    >
      <v-text-field
        v-model="email"
        :rules="[emailValidRule, emailRequiredRule]"
        :error-messages="errors.email"
        label="E-mail"
        required
      ></v-text-field>

      <v-btn
        :loading="loading"
        :disabled="!valid || loading"
        @click="sendMail"
        color="primary"
      >
        Send a password reset mail
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    valid: false,
    email: "",
    emailValidRule: v => /.+@.+\..+/.test(v) || "E-mail must be valid"
  }),
  computed: mapState("User/Forms/ForgottenPassword", {
    loading: "loading",
    errors: "errors"
  }),
  methods: {
    ...mapActions("User/Forms/ForgottenPassword", [
      "forgotPassword",
      "resetEmailErrors"
    ]),
    emailRequiredRule(v) {
      this.resetEmailErrors();
      return !!v || "E-mail is required";
    },
    sendMail() {
      if (!this.valid) {
        return;
      }
      return this.forgotPassword({ email: this.email });
    }
  }
};
</script>
