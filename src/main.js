import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import element from "element-ui";
import "./assets/css/index.css"
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(element);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
