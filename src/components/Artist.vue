<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      style="background-color:rgba(0,0,0,0);border-radius:4px;cursor:grab"
      :class="[`elevation-${hover ? 12 : 0}`, {'white':hover}]"
      target="_blank"
      :href="item.url"
    >
      <v-layout>
        <v-flex xs5 py-3 pr-2 :class="{'pl-3':hover}" style="transition: all 0.5s;">
          <v-img :class="{'border-radius':!hover}" :src="item.src" height="125" width="125"></v-img>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            <div
              style="transition: all 0.5s;"
              class="name"
              :class="{'text-truncate':!hover}"
            >Florence Becquart</div>
          </v-card-title>
          <v-card-title primary-title class="my-0 py-0">
            <div style="transition: all 0.5s;" :class="{'text-truncate':!hover}">Céramiste</div>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Artist",
  props: ["item"]
};
</script>

<style scoped>
.name {
  font-size: 20px;
}
.border-radius {
  border-radius: 4px;
}
</style>
