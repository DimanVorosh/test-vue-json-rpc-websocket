import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import aboutRoutes from './about'

Vue.use(VueRouter)

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const routes = baseRoutes.concat(aboutRoutes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
