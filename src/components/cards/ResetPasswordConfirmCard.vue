<template>
<v-card>
  <v-toolbar dark color="primary">
    <v-btn icon>
      <v-icon>security</v-icon>
    </v-btn>
    <v-toolbar-title class="white--text">Reset your Password</v-toolbar-title>
  </v-toolbar>
  <v-card-text>
    <reset-password-confirm-form></reset-password-confirm-form>
  </v-card-text>
  <v-card-actions>
    <v-btn flat :to="{name: 'auth'}">Log in</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import ResetPasswordConfirmForm from "@/components/forms/ResetPasswordConfirmForm";

export default {
  components: {
    ResetPasswordConfirmForm
  }
};
</script>
