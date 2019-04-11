<template>
  <v-dialog v-if="dialogItem.active" v-model="dialogItem.active" width="500">
    <v-card flat tile class="d-flex">
      <v-img
        :src="dialogItem.src"
        :lazy-src="dialogItem.src"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
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
.title {
  position: absolute;
  bottom:-10px
}
</style>
