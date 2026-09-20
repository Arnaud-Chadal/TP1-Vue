import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ajouter',
      name: 'ajouter',
      component: () => import('../views/AddArticleView.vue'),
    },
        {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
    },
        {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/ArticlesView.vue'),
    },
        {
      path: '/panier',
      name: 'panier',
      component: () => import('../views/CartView.vue'),
    },
        {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
})

export default router
