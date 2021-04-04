import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    meta: {layout: 'empty'},
    name: 'register',
    component: () => import('../views/Register')
  },
  {
    path: '/categories',
    meta: {layout: 'main'},
    name: 'categories',
    component: () => import('../views/Categories')
  },
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('../views/Home')
  },
  {
    path: '/detail-record',
    meta: {layout: 'main'},
    name: 'detail-record',
    component: () => import('../views/Detail-record')
  },
  {
    path: '/record',
    meta: {layout: 'main'},
    name: 'record',
    component: () => import('../views/Record')
  },
  {
    path: '/profile',
    meta: {layout: 'main'},
    name: 'profile',
    component: () => import('../views/Profile')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main'},
    component: () => import('../views/Planning')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main'},
    component: () => import('../views/History')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
