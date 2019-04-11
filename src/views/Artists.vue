<template>
  <div>
    <List type="artistsList" class="pt-5" title="Artistes que je recommande" url="/artists" :items="artists"/>
  </div>
</template>

<script>
import List from "../components/List";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["artists"])
  },
  components: {
    List
  }
};
</script>

<style scoped>

</style>