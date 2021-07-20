import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/layout/layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/home/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
