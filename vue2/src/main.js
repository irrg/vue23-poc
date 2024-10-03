import Vue from 'vue2';
import App from './App.vue';
import router from './router';

new Vue({
  router,
  render: h => h(App),
}).$mount('#vue2-app');