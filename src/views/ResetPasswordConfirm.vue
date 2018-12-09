<template>
<v-container fluid grid-list-lg>
  <v-flex md6 offset-md3>

    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <reset-password-confirm-card></reset-password-confirm-card>
      </v-flex>
    </v-layout>

  </v-flex>
</v-container>
</template>

<script>
import ResetPasswordConfirmCard from "@/components/cards/ResetPasswordConfirmCard";

export default {
  components: {
    ResetPasswordConfirmCard
  }
};
</script>
