import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../views/login"
import home from "../views/home.vue"
import index from "../views/index.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component:login
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path:"/home",
    name:"home",
    component:home
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

router.beforeEach((to, from, next) => {
  if(!Vue.token)
  {
    next("/login");
  } else{
    next();
  }

  
})
export default router
