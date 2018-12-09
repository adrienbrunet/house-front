<template>
  <div class="reset-password-confirm-form">
    <template v-if="errors">
      <span class="errors" v-for="error in errors.non_field_errors" :key="error">
        <p class="error--text">{{ error }}</p>
      </span>
    </template>
    <v-form v-model="valid" @keyup.native.enter="valid && submit()">
      <v-text-field
        v-model="newPassword"
        :rules="[passwordRules, newPasswordRules]"
        label="New Password"
        :error-messages="errors.newPassword"
        type="password"
        required
      ></v-text-field>
      <v-text-field
        v-model="newPasswordConfirm"
        :rules="[passwordRules, confirmRules]"
        label="Confirm New Password"
        type="password"
        required
      ></v-text-field>
      <v-btn
        :loading="loading"
        :disabled="!valid || loading"
        @click="submit"
        color="primary"
      >
        Set Password
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    valid: false,
    newPassword: "",
    newPasswordConfirm: ""
  }),
  computed: {
    ...mapState("User/Forms/ResetPasswordConfirm", {
      errors: "errors",
      loading: "loading"
    })
  },
  methods: {
    ...mapActions("User/Forms/ResetPasswordConfirm", [
      "resetPassword",
      "resetNewPasswordErrors",
      "setErrorPasswordsMatch"
    ]),
    confirmRules(v) {
      return v === this.newPassword || "Password does not match";
    },
    newPasswordRules(v) {
      this.resetNewPasswordErrors();
      return (
        (v && v.length > 7) ||
        "This password is too short. It must contain at least 8 characters."
      );
    },
    passwordRules(v) {
      return !!v || "Password is required";
    },
    submit() {
      if (this.newPassword !== this.newPasswordConfirm) {
        this.setErrorPasswordsMatch();
        return;
      }
      this.resetPassword({
        uid: this.$route.params.uid,
        reset_token: this.$route.params.token,
        password: this.newPassword
      });
    }
  }
};
</script>
