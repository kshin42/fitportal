import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createChallenge',
    name: 'CreateChallenge',
    component: () => import('../views/CreateChallenge.vue')
  },
    {
      path: '/templates',
      name: 'Templates',
      component: () => import('../views/Templates.vue')
    },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
