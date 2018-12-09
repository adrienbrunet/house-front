<template>
<v-card>
  <v-toolbar dark color="primary">
    <v-btn icon>
        <v-icon>account_circle</v-icon>
    </v-btn>
    <v-toolbar-title class="white--text">Sign up</v-toolbar-title>
  </v-toolbar>
  <v-card-text>
    <sign-up-form></sign-up-form>
  </v-card-text>
  <v-card-actions>
    <v-btn :to="{name: 'auth'}" flat>Log in</v-btn>
    <v-spacer></v-spacer>
    <v-btn :to="{name: 'forgotten-password'}" flat>Forgotten Password</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import SignUpForm from "@/components/forms/SignUpForm";

export default {
  components: {
    SignUpForm
  }
};
</script>
