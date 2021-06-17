import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import hashLayout from '../views/hashModLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vue',
    name: 'vueHashLayout',
    component: hashLayout,
    children: [
      {
        path: '/vue',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'prop-of-main',
        name: 'propOfMain',
        component: () => import('@/views/Test.vue')
      }
    ]
  },
  {
    path: '/combone12',
    name: 'combone12',
    component: () => import('@/views/Test.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: window.__POWERED_BY_QIANKUN__ ? '/vue/' : '/',
  mode: 'hash',
  routes
})

export default router
