import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import Vuetify from 'vuetify'
import VueAwesomeSwiper  from 'vue-awesome-swiper'

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueAwesomeSwiper)





const routes = [

  {
    path: '/',
    name: 'MainView',
    component: MainView
  }, 
  {
    path: '/brand',
    name: 'brand',
    component : function(){

       return import('../views/BrandView.vue');
    }
  },
  {
    path : '/menu',
    name : 'schoolMenu',
    component : function(){

       return import('../views/MenuView.vue');
    }
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : routes

})

export default router
