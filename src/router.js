import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/huiles',
      name: 'huiles',
      component: () => import(/* webpackChunkName: "huiles" */ './views/Huiles.vue')
    },
    {
      path: '/dessins',
      name: 'dessins',
      component: () => import(/* webpackChunkName: "dessins" */ './views/Dessins.vue')
    }, {
      path: '/biographie',
      name: 'biographie',
      component: () => import(/* webpackChunkName: "biographie" */ './views/Biographie.vue')
    }, {
      path: '/atelier',
      name: 'atelier',
      component: () => import(/* webpackChunkName: "atelier" */ './views/Atelier.vue')
    },
    {
      path: '/artists',
      name: 'artists',
      component: () => import(/* webpackChunkName: "artists" */ './views/Artists.vue')
    }, {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: () => import(/* webpackChunkName: "atelier" */ './views/MentionsLegales.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
