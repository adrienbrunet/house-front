<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon>
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">Profile</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
        My email: {{ email }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    email() {
      return this.$store.state.User.user.email;
    }
  }
};
</script>
