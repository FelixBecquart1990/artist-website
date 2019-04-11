<template>
  <div>
    <v-container :class="{'pl-5':$vuetify.breakpoint.smAndUp}" class="py-0 pt-5">
      <v-layout>
        <div class="headline primary--text">Biographie</div>
      </v-layout>
      <v-layout row wrap class="pb-5">
        <v-flex d-flex xs12 sm7 order-xs2 order-sm1>
          <v-layout row wrap column :class="{'pr-5':$vuetify.breakpoint.smAndUp}">
            <v-flex class="title-biography">"Un petit mot avant de peindre"</v-flex>
            <v-flex>Né en 1957 à Lille, Sylvain Becquart architecte d'intérieur de formation, se consacre à la peinture depuis son plus jeune âge. Une mère dans l'illustration et deux soeurs artistes, la famille fut un terrain propice à un épanouissement artistique. A 11 ans, il reçoit une boite d'aquarelles de ses parents. Equipé d'un carton à dessin et d'un chevalet, balaie la campagne du nord de la France en mettant en scène des paysages si caractéristiques.</v-flex>
            <v-flex class="title-biography">"Avec un pinceau, on est pacifique, on passe partout".</v-flex>
            <v-flex>Etudiant à Paris, il participe aux cours de modèles vivants dans les ateliers de la ville. Aujourd'hui, perfectionne le nu, source d'inspiration pour des compositions sur châssis. Au fil du temps, de l'aqurelle à la peinture à l'huile en passant par l'acrylique, il avance dans ses recherches. Les voyages sont prétextes à adapter son mode d'expression. Dans ses carnets, le crayon de couleur et le pastel gras, appuyés d'un solide dessin, traduisent les ambiances et les scènes de la vie. Son travail évolue à travers les courants artistiques tels "les fauves" et les "expressionnistes".</v-flex>
            <v-flex class="title-biography">"La couleur devient forme".</v-flex>
            <v-flex>La couleur tantôt forte et puissante, tantôt sourde; mais toujours présente, indispensable. La forme, souvent en mouvement, traduit une figuration (extraits des carnets de voyages) ou une abstraction et devient alors: "une ballade du pinceau". Sylvain Becquart recherche des sujets, des formes et couleurs, l'ensemble évoluant au grès du temps et des inspirations. le temps qui passe lui donne une indépendance d'expression qu'il saisit avec enthousiasme.</v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm5 order-xs1 order-sm2>
          <v-img
            :src="photoBiography"
            :lazy-src="photoBiography"
            @click="dialogItem = {active: true, src: photoBiography }"
            aspect-ratio="1"
            class="grey lighten-2 mt-5 mb-4"
            style="border-radius:4px"
            :class="{'mx-5':$vuetify.breakpoint.smAndDown, 'border-radius': $vuetify.breakpoint.xs }"
          >
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>
    <List type="horizontalSwiper" title="Atelier" url="/atelier" :items="atelier"/>
    <List
      type="artistsSwiper"
      title="Les artistes que je recommande"
      url="/artists"
      :items="artists"
    />
  </div>
</template>

<script>
import photoBiography from "../assets/photo-bio.jpg";
import List from "../components/List";
import { mapState } from "vuex";

export default {
  data: () => ({
    photoBiography: photoBiography
  }),
  components: {
    List
  },
  computed: {
    ...mapState(["artists", "atelier"]),
    dialogItem: {
      get: function() {
        return this.$store.state.dialogItem;
      },
      set: function(newValue) {
        this.$store.commit("setDialogItem", newValue);
      }
    }
  }
};
</script>

<style scoped>
.border-radius {
  border-radius: 50% !important;
}
.title-biography {
  font-family: secondary;
  font-size: 26px;
  padding: 15px 0px;
}
</style>