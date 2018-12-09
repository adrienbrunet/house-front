<template>
<v-container fluid grid-list-lg>
  <v-flex md6 offset-md3>

    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <forgotten-password-card></forgotten-password-card>
      </v-flex>
    </v-layout>

  </v-flex>
</v-container>
</template>

<script>
import ForgottenPasswordCard from "@/components/cards/ForgottenPasswordCard";

export default {
  components: {
    ForgottenPasswordCard
  }
};
</script>
