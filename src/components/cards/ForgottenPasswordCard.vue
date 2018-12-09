<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon>
        <v-icon>security</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">Forgotten Password</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <forgotten-password-form></forgotten-password-form>
    </v-card-text>
    <v-card-actions>
      <v-btn flat :to="{name: 'auth'}">Log in</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ForgottenPasswordForm from "@/components/forms/ForgottenPasswordForm";

export default {
  components: {
    ForgottenPasswordForm
  }
};
</script>
