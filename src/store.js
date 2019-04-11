import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialogItem: {},
    huiles: [
      {
        title: "Sur la plage de saisons super",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        title: "Dans la mer la plage de saisons super",
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
      },
      {
        title: "La plage de saisons super",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      }
    ],
    dessins: [
      {
        title: "Dans la mer la plage de saisons super",
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
      },
      {
        title: "Sur la plage de saisons super",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        title: "La plage de saisons super",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        title: "La mer la plage de saisons super",
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
      },
      {
        title: "Saisons super",
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        title: "Super",
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
      }
    ],
    atelier: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      }
    ],
    artists: [
      {
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        url: "https://www.instagram.com/carnetdebalades/"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        url: "https://www.instagram.com/carnetdebalades/"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        url: "https://www.instagram.com/carnetdebalades/"
      }
    ],
  },
  mutations: {
    setDialogItem(state, val) {
      state.dialogItem = val
    }
  },
  actions: {

  }
})
