<template>
  <div class="pt-5">
    <List type="horizontalSwiper" title="Huiles" url="/huiles" :items="huiles"/>
    <List type="horizontalSwiper" title="Dessins" url="/dessins" :items="dessins"/>
    <List type="horizontalSwiper" title="Atelier" url="/atelier" :items="atelier"/>
    <List type="artistsSwiper" title="Les artistes que je recommande" url="/artists" :items="artists"/>
  </div>
</template>

<script>
import List from "../components/List";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["huiles", "dessins", "atelier", "artists"])
  },
  components: {
    List
  }
};
</script>