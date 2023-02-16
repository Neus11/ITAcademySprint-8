import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import('../views/SpaceShipView.vue'),
    beforeEnter: (to, from, next) => {
      if(store.state.authentic == false) {
        next(false);
      } else {
        next();
      }
    }
  },
  {
    path: '/starships/:id',
    name: 'details',
    component: () => import('../views/ShipCardView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
