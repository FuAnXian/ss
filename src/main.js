import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import elemnt from "element-ui";
import "./assets/css/index.css"
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elemnt);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
