import Vue from 'vue';
import VueRouter from 'vue-router'
import 'babel-polyfill'
import router from './router'
import App from './pages/App.vue';


document.addEventListener('DOMContentLoaded', () => {
    const el = document.body.appendChild(document.createElement('index'));
    if (process.env.NODE_ENV !== 'production') {
      setTimeout(() => {
        const app = new Vue({
          el,
          router,
          render: h => h(App),
        });
      }, 500);
    } else {
      const app = new Vue({
        el,
        router,
        render: h => h(App),
      });
    }
});
