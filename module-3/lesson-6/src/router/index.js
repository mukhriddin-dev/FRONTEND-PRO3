import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/product',
          name: 'product',
          component: import('../views/Product/Product.vue')
        },
        {
          path: '/product/:id',
          name: 'productItem',
          component: import('../views/Product/ProductItem.vue')
        },
        {
          path: '/category',
          name: 'category',
          component: () => import('../views/Category/Category.vue')
        },
        {
          path: '/employee',
          name: 'employee',
          component: () => import('../views/Employee/Employee.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Login.vue')
    }
  ]
})

export default router
