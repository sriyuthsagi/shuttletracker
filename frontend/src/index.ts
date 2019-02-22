import Vue from 'vue';
import Router from 'vue-router';
import Public from './components/Public.vue';
import about from './components/about.vue';
import myc from './components/MyComponent.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'main',
        component: Public,
      },
      {
        path: '/about',
        name: 'about',
        component: about,
      },
      {
        path: '/myc',
        name: 'myc',
        component: myc,
      },
    ],
  });
