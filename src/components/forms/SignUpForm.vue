<template>
  <div class="signup-form">
    <template v-if="errors">
      <span class="errors" v-for="error in errors.non_field_errors" :key="error">
        <p class="error--text">{{ error }}</p>
      </span>
    </template>
    <v-form v-model="valid" @keyup.native.enter="valid && signup()">
      <v-text-field
        v-model="email"
        :rules="[resetEmailErrorsRule, ...emailRules]"
        :error-messages="errors.email"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="[genericPasswordRules, passwordRules]"
        label="Password"
        :error-messages="errors.password"
        type="password"
        required
      ></v-text-field>
      <v-text-field
        v-model="passwordConfirm"
        :rules="[genericPasswordRules, confirmRules]"
        label="Confirm Password"
        type="password"
        required
      ></v-text-field>
      <v-btn
        :loading="loading"
        :disabled="!valid || loading"
        @click="signup"
      >
        Sign up
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
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordConfirm: ""
  }),
  computed: mapState("User/Forms/SignUp", {
    errors: "errors",
    loading: "loading"
  }),
  methods: {
    ...mapActions("User/Forms/SignUp", [
      "signUp",
      "resetEmailErrors",
      "resetPasswordErrors",
      "setErrorPasswordsMatch"
    ]),
    resetEmailErrorsRule() {
      this.resetEmailErrors();
      return true;
    },
    confirmRules(v) {
      return v === this.password || "Password does not match";
    },
    passwordRules(v) {
      this.resetPasswordErrors();
      return (
        (v && v.length > 7) ||
        "This password is too short. It must contain at least 8 characters."
      );
    },
    genericPasswordRules(v) {
      return !!v || "Password is required";
    },
    signup() {
      if (this.password !== this.passwordConfirm) {
        this.setErrorPasswordsMatch();
        return;
      }
      this.signUp({ email: this.email, password: this.password });
    }
  }
};
</script>
