import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Pets from '@/views/Pets.vue'
import Register from '@/views/Register.vue'
import Message from '@/views/Message.vue'
import Login from '@/views/Login.vue'
import MyPets from '@/views/MyPets.vue'
import Dogs from '@/views/Dogs.vue'
import Cats from '@/views/Cats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Pets
  },
  {
    path: '/pets/:id?',
    component: Pets
  },
  {
    path: '/dogs',
    component: Dogs
  },
  {
    path: '/cats',
    component: Cats
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/message/:id',
    component: Message
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/mypets',
    component: MyPets
  },                 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
