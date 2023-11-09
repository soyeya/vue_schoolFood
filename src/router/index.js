import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  }, 
  {
    path: '/brand',
    name: 'Brand',
    component : function(){

       return import('../views/BrandView.vue');
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [

    {
      path: '/',
      name: 'MainView',
      component: MainView //main페이지로 지정
    },
    {
      path: '/brand',
      name: 'Brand',
      component : function(){

         return import('../views/BrandView.vue'); //router로 동작
      }
    }

  ]

})

export default router
