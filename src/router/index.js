import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
	path:'/product',
	name:'product',
	component:() => import('../views/Product')
  },
  {
	path:'/personnel',
	name:'personnel',
	component:() => import('../views/Personnel')
  },
  {
	  path:'/download',
	  name:'download',
	  component:() => import('../views/Download')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
