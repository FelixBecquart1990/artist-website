<template>
  <v-app>
    <v-toolbar
      :class="{'home-page': splashscreen}"
      fixed
      scroll-off-screen
      class="elevation-0"
      @click="splashscreen = false"
      style="background-color: rgba(0, 0, 0, 0);"
    >
      <v-toolbar-side-icon class="hidden-md-and-up white--text" v-if="!splashscreen" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title
        :class="{'title-center': splashscreen}"
        style="margin-left:42px;font-family: secondary;"
      >
        <div></div>
        <v-img
          v-if="splashscreen"
          :src="photoBiography"
          :lazy-src="photoBiography"
          style="border-radius:50%; width: 150px; height:150px; border:solid 6px white; margin-right:auto;margin-left:auto"
          class="mb-4"
        >
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>
        <div
          @click="$router.push('/')"
          style="cursor:pointer;font-family: secondary;line-height:40px;padding-left:5px; font-size:30px"
        >{{ title }}</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-if="!splashscreen">
        <div v-for="view in views" style="height:100%;display:flex" :key="view.title">
          <v-btn
            class="white--text"
            v-if="view.to && view.title != 'Accueil'"
            @click="$router.push(view.to)"
            flat
          >{{view.title}}</v-btn>
          <v-btn
            v-if="view.href"
            left
            color="secondary primary--text"
            round
            class="elevation-0 justify-center"
            style="height:32px;"
            :href="view.href"
          >
            Contact
            <v-icon dark small right>mail</v-icon>
          </v-btn>
        </div>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-if="!splashscreen">
        <div
          v-for="socialMedia in socialMedias"
          :key="socialMedia.title"
          style="height:100%;display:flex"
        >
          <v-btn class="zoom" target="_blank" :href="socialMedia.to" flat fab>
            <div :class="socialMedia.title"></div>
          </v-btn>
        </div>
      </v-toolbar-items>
    </v-toolbar>
    <!-- <v-toolbar
      scroll-off-screen
      fixed
      class="elevation-0"
      dark
      style="background-color:rgba(0, 0, 0, 0.8)"
    >
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title
        @click="$router.push('/')"
        style="cursor:pointer;font-family: secondary;line-height:40px;padding-left:5px; font-size:30px"
      >{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <div v-for="view in views" style="height:100%;display:flex" :key="view.title">
          <v-btn
            v-if="view.to && view.title != 'Accueil'"
            @click="$router.push(view.to)"
            flat
          >{{view.title}}</v-btn>
          <v-btn
            v-if="view.href"
            left
            color="secondary primary--text"
            round
            class="elevation-0 justify-center"
            style="height:32px;"
            :href="view.href"
          >
            Contact
            <v-icon dark small right>mail</v-icon>
          </v-btn>
        </div>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <div
          v-for="socialMedia in socialMedias"
          :key="socialMedia.title"
          style="height:100%;display:flex"
        >
          <v-btn class="zoom" target="_blank" :href="socialMedia.to" flat fab>
            <div :class="socialMedia.title"></div>
          </v-btn>
        </div>
      </v-toolbar-items>
    </v-toolbar>-->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
      style="position:fixed; top:0; left:0;"
    >
      <v-list class="pt-0 pb-0">
        <v-list-tile
          v-for="view in views"
          :key="view.title"
          @click="view.to?$router.push(view.to):null"
          :href="!view.to?view.href:null"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ view.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list class="pt-0" three-line>
        <v-list-tile>
          <v-list-tile-content v-for="socialMedia in socialMedias" :key="socialMedia.title">
            <v-btn class="zoom" target="_blank" :href="socialMedia.to" flat fab>
              <div :class="socialMedia.title"></div>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content class="background-texture">
      <transition name="slide-fade">
        <router-view style="margin-top:60px;"/>
      </transition>
    </v-content>
    <DialogItem/>
    <Footer :socialMedias="socialMedias"/>
  </v-app>
</template>

<script>
import photoBiography from "./assets/photo-bio.jpg";
import DialogItem from "./components/DialogItem";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Footer,
    DialogItem
  },
  mounted() {
    let self = this;
    setTimeout(function() {
      self.splashscreen = false;
    }, 3000);
  },
  data() {
    return {
      drawer: null,
      splashscreen: true,
      title: "Sylvain Becquart",
      photoBiography: photoBiography,
      views: [
        { title: "Accueil", to: "/" },
        { title: "Huiles", to: "/huiles" },
        { title: "Dessins", to: "/dessins" },
        { title: "Biographie", to: "/biographie" },
        { title: "Atelier", to: "/atelier" },
        {
          title: "Contact",
          href:
            "mailto:becquartsf@gmail.com?Subject=sylvain-becquart.fr%20-%20Question"
        }
      ],
      socialMedias: [
        {
          title: "instagram",
          to: "https://www.instagram.com/carnetdebalades/"
        },
        { title: "facebook", to: "https://www.facebook.com/sylvainbecquart/" },
        {
          title: "youtube",
          to: "https://www.youtube.com/user/sbecquartpeintures/videos"
        }
      ]
    };
  }
};
</script>

<style>
@font-face {
  font-family: secondary;
  src: url(./assets/samantha.ttf);
}
.background-texture {
  background: url("./assets/background-texture.png") repeat;
}
.youtube {
  background: url("./assets/social-medias.png") no-repeat -2px -2px;
  width: 32px;
  height: 32px;
}
.zoom > div {
  transform: scale(0.9);
}
.zoom:hover > div {
  transform: scale(1);
  transition: all 0.5s;
}
.facebook {
  background: url("./assets/social-medias.png") no-repeat -2px -35px;
  width: 32px;
  height: 32px;
}
.instagram {
  background: url("./assets/social-medias.png") no-repeat -35px -35px;
  width: 32px;
  height: 32px;
}

/* width */
::-webkit-scrollbar {
  width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.8);
}

.slide-fade-enter-active {
  transition: all 1s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(3px);
}

.v-toolbar__content {
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.3s;
  color: white;
}
.v-toolbar__title {
  font-size: 30px;
}
.home-page .v-toolbar__content {
  height: 100vh !important;
}
.home-page .title-center {
  width: 100%;
  margin-left: 0px !important;
  text-align: center;
  font-size: 40px;
  /* text-shadow: 0px 5px 15px rgba(0,0,0,0.6); */
  padding-bottom: 50px;
}
</style>