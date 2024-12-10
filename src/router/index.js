import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import More from '@/views/More.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/more',
      name: 'more',
      component: More,
    },
  ],
})

export default router
