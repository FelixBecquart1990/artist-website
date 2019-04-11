<template>
  <v-footer dark height="auto" style="background-color:white">
    <v-card class="flex" flat tile>
      <v-layout align-center justify-center row fill-height v-if="$vuetify.breakpoint.smAndDown">
        <v-btn
          v-for="socialMedia in socialMedias"
          :key="socialMedia.title"
          class="zoom"
          target="_blank"
          :href="socialMedia.to"
          flat
          fab
        >
          <div :class="socialMedia.title"></div>
        </v-btn>
      </v-layout>

      <v-card-actions
        class="justify-center"
        style="background-color:rgba(0, 0, 0, 0.8); opacity:0.5"
      >&copy; 2019 — Sylvain Becquart | Tous droits réservés</v-card-actions>
      <v-card-actions
        @click="$router.push('/mentions-legales')"
        class="justify-center"
        style="background-color:rgba(0, 0, 0, 0.8);opacity:0.5;height:15px;font-size:10px;padding-top:0px; cursor:pointer"
      >Mentions légales</v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["socialMedias"],
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style scoped>

</style>
