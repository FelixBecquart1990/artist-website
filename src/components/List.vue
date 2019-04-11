<template>
  <v-container :class="{'pl-5':$vuetify.breakpoint.smAndUp}" class="py-0">
    <v-layout>
      <div
        @click="$router.push(url)"
        :class="{'cursor borderLeftRight': $router.currentRoute.path != url}"
        class="headline primary--text"
        style="margin-bottom:-20px"
      >{{ title }}</div>
    </v-layout>

    <v-layout v-if="type =='horizontalSwiper'" class="pt-4" row wrap>
      <swiper
        class="px-5 pt-3 pb-5"
        style="margin-left:-50px; width:100%"
        ref="mySwiper"
        :options="swiperOption"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <item class="mr-4" :item="item" :type="type"/>
        </swiper-slide>
      </swiper>
    </v-layout>

    <v-layout v-else-if="type=='artistsSwiper'" class="pt-4" row wrap>
      <swiper
        class="px-5 pt-3 pb-5"
        style="margin-left:-50px; width:100%"
        ref="mySwiper"
        :options="swiperOption"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <artist class="mr-4" :item="item" :type="type"/>
        </swiper-slide>
      </swiper>
    </v-layout>

    <v-layout v-else-if="type=='artistsList'" class="pt-4" row wrap>
      <v-flex
        class="pt-3"
        v-for="(item, index) in items"
        :key="index"
        xs12
        md6
        xl4
        :pr-4="$vuetify.breakpoint.smAndUp"
        pb-4
      >
        <artist class="mr-4" :item="item" :type="type"/>
      </v-flex>
    </v-layout>

    <v-layout v-else class="pt-4" row wrap>
      <v-flex
        class="pt-3"
        v-for="(item, index) in items"
        :key="index"
        xs12
        sm6
        md4
        xl3
        :pr-4="$vuetify.breakpoint.smAndUp"
        pb-4
      >
        <item :item="item"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Item from "./Item";
import Artist from "./Artist";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "List",
  props: ["title", "url", "items", "type"],
  components: {
    Item,
    Artist,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: {}
};
</script>

<style scoped>
.swiper-slide {
  width: 300px !important;
}
/*
.swiper-slide:nth-child(2n) {
  width: 230px !important;
}
.swiper-slide:nth-child(3n) {
  width: 330px !important;
} */

.cursor {
  cursor: pointer;
}

.borderLeftRight {
  display: inline-block;
  position: relative;
  color: #000;
}

.borderLeftRight::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform-origin: bottom right;
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}

.borderLeftRight:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
