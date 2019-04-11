<template>
  <div>
    <List class="pt-5 mb-5" title="Dessins" url="/dessins" :items="dessins"/>
    <List type="horizontalSwiper" title="Huiles" url="/huiles" :items="huiles"/>
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