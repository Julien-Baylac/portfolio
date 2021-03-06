import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Birdhouses from '../views/projects/Birdhouses.vue'
import DronesGabians from '../views/projects/DronesGabians.vue'
import MemoryStorage from '../views/projects/MemoryStorage.vue'
import SouvenirEcran from '../views/projects/SouvenirEcran.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/birdhouses',
    name: 'birdhouses',
    component: Birdhouses
  },
  {
    path: '/drones_gabians',
    name: 'drones_gabians',
    component: DronesGabians
  },
  {
    path: '/memory_storage',
    name: 'memory_storage',
    component: MemoryStorage
  },
  {
    path: '/souvenir_ecran',
    name: 'souvenir_ecran',
    component: SouvenirEcran
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
