import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/facture',
    name: 'Facture',
    component: () => import(/* webpackChunkName: "about" */ '../views/Facture.vue')
  },
  {
    path: '/archive',
    name: 'Archive',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Archive.vue')
  },
  {
    path: '/prime',
    name: 'Prime',
    component: () => import(/* webpackChunkName: "about" */ '../views/Prime.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
