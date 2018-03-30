import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home.vue'
import appointment from '@/views/appointment/appointment.vue'
import index from '@/views/index/index.vue'
import indent from '@/views/indent/indent.vue'
import meal from '@/views/meal/meal.vue'
import login from '@/views/login/login.vue'
import test from '@/views/test/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path:'/appointment',
      name:'appointment',
      components:{
       default:appointment
     }
    },
    {
      path: '/indent',
      name: 'indent',
      component: indent
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/meal',
      name: 'meal',
      component: meal
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})
