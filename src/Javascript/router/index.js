
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HelloWorld from '../components/HelloWorld.vue';

const router = new VueRouter({
    // mode: 'history',
    routes: [
      {
        path: '/',
        component: HelloWorld
      },
    ]
})    
export default router
