<template>
  <div class="login-form">
    <template v-if="errors">
      <span class="errors" v-for="error in errors.non_field_errors" :key="error">
        <p class="error--text">{{ error }}</p>
      </span>
    </template>
    <v-form v-model="valid" @keyup.native.enter="valid && login()">
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field
        v-model="password"
        :rules="[passwordRules]"
        :error-messages="errors.password"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <v-btn :loading="loading" :disabled="!valid || loading" @click="login">Login</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    valid: false,
    password: "",
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  computed: mapState("User/Forms/Login", {
    errors: "errors",
    loading: "loading"
  }),
  methods: {
    ...mapActions("User/Forms/Login", ["authenticate", "resetPasswordErrors"]),
    passwordRules(v) {
      this.resetPasswordErrors();
      return !!v || "Password is required";
    },
    login() {
      let data = { password: this.password, username: this.email };
      if (this.$route.params.confirmToken) {
        data.confirm_token = this.$route.params.confirmToken;
      }
      this.authenticate(data);
    }
  }
};
</script>
