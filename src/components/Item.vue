<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      style="background-color:rgba(0,0,0,0);border-radius:4px; cursor:grab"
      :class="[`elevation-${hover ? 12 : 0}`, {'white':hover}]"
      @click="dialogItem = {active: true, src: item.src }"
    >
      <v-img
        style="border-radius:4px; height:200px;"
        :class="{'border-radius':hover && type!='horizontalSwiper' && item.title}"
        :src="item.src"
        :lazy-src="item.src"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
      <v-card-title v-if="type!='horizontalSwiper' && item.title">
        <div
          class="item-title"
          :class="{'text-truncate':!hover, 'text-margin': !hover}"
        >{{ item.title }}</div>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Item",
  props: ["item", "type"],
  methods: {},
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
.border-radius {
  border-radius: 4px 4px 0px 0px !important;
}
.item-title {
  font-family: secondary;
  font-size: 28px;
  transition: all 0.2s;
}
.text-margin {
  margin-left: -15px;
}
</style>
