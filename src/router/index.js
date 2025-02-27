import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home', // Redirects to the home route
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/future',
      name: 'future',
      component: () => import('../views/FutureView.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue'),
    },

    {
      path: '/add',
      name: 'addGame',
      component: () => import('../views/addGame.vue'),
    },
  ],
});

export default router;
