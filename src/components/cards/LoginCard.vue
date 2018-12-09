<template>
<v-card>
  <v-toolbar dark color="primary">
    <v-btn icon>
        <v-icon>account_circle</v-icon>
    </v-btn>
    <v-toolbar-title class="white--text">Log in</v-toolbar-title>
  </v-toolbar>
  <v-card-text>
    <login-form></login-form>
  </v-card-text>
  <v-card-actions>
    <v-btn flat :to="{name: 'forgotten-password'}">Forgotten Password</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="primary" :to="{name: 'signup'}" flat>Sign up</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import LoginForm from "@/components/forms/LoginForm";

export default {
  components: {
    LoginForm
  }
};
</script>
