<template>
  <div>
    <List class="pt-5 mb-5" title="Huiles" url="/huiles" :items="huiles"/>
    <List type="horizontalSwiper" title="Dessins" url="/dessins" :items="dessins"/>
  </div>
</template>

<script>
import List from "../components/List";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["huiles", "dessins"])
  },
  components: {
    List
  }
};
</script>

<style scoped>
</style>
