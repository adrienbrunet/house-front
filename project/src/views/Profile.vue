<template>
<v-container fluid grid-list-lg>
  <v-flex md6 offset-md3>

    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <profile-card></profile-card>
      </v-flex>

      <v-flex xs12 sm12 md12>
        <security-card></security-card>
      </v-flex>

    </v-layout>
  </v-flex>
</v-container>
</template>

<script>
import ProfileCard from "@/components/cards/ProfileCard";
import SecurityCard from "@/components/cards/SecurityCard";

export default {
  components: {
    ProfileCard,
    SecurityCard
  }
};
</script>
