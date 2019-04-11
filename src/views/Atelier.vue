<template>
  <List class="pt-5" title="Atelier" url="/atelier" :items="atelier"/>
</template>

<script>
import List from "../components/List";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["atelier"])
  },
  components: {
    List
  }
};
</script>