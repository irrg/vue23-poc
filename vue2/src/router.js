import Vue from 'vue2';
import Router from 'vue-router3';

Vue.use(Router);

const routes = [
  { path: '/', component: () => import('./views/HomeView.vue') },
];

export default new Router({
  mode: 'history',
  base: '/vue2',
  routes,
});
