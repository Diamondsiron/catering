import home from '@/views/home/home.vue'
import appointment from '@/views/appointment/appointment.vue'
import index from '@/views/index/index.vue'
import indent from '@/views/indent/indent.vue'
import meal from '@/views/meal/meal.vue'
import login from '@/views/login/login.vue'
import test from '@/views/test/test.vue'
import activity from '@/views/activity/activity.vue'
import address from '@/views/address/address.vue'
import charge from '@/views/charge/charge.vue'
import coupon from '@/views/coupon/coupon.vue'
import groupmeal from '@/views/groupmeal/groupmeal.vue'
import history from '@/views/history/history.vue'
import information from '@/views/information/information.vue'
import integral from '@/views/integral/integral.vue'
import Invitation from '@/views/Invitation/Invitation.vue'
import order from '@/views/order/order.vue'
import pwd from '@/views/pwd/pwd.vue'
import remaining from '@/views/remaining/remaining.vue'
import wx from '@/views/wx/wx.vue'
import Oauth from '@/views/Oauth/Oauth.vue'
import list1 from '@/views/list/list1.vue'
import list2 from '@/views/list/list2.vue'
import list3 from '@/views/list/list3.vue'
import list4 from '@/views/list/list4.vue'




export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
      title: 'Login - 登录'
  },
  component: () => import('@/views/login/login.vue')
};

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
      title: '404-页面不存在'
  },
  component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
  path: '/403',
  meta: {
      title: '403-权限不足'
  },
  name: 'error-403',
  component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
  path: '/500',
  meta: {
      title: '500-服务端错误'
  },
  name: 'error-500',
  component: () => import('@/views/error-page/500.vue')
};

export const appRouter = [
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
    path: '/meal/:id',
    name: 'meal',
    component: meal
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity
  },
  {
    path: '/address',
    name: 'address',
    component: address
  },
  {
    path: '/charge',
    name: 'charge',
    component: charge
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: coupon
  },
  {
    path: '/groupmeal',
    name: 'groupmeal',
    component: groupmeal
  },
  {
    path: '/history',
    name: 'history',
    component: history
  },
  {
    path: '/information',
    name: 'information',
    component: information
  },
  {
    path: '/integral',
    name: 'integral',
    component: integral
  },
  {
    path: '/Invitation',
    name: 'Invitation',
    component:Invitation 
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '/pwd',
    name: 'pwd',
    component:pwd 
  },
  {
    path: '/remaining',
    name: 'remaining',
    component: remaining
  },
  {
    path: '/wx',
    name: 'wx',
    component: wx
  },
  {
    path: '/Oauth',
    name: 'Oauth',
    component: Oauth
  },
  {
    path: '/list1',
    name: 'list1',
    component: list1
  },
  {
    path: '/list2',
    name: 'list2',
    component: list2
  },
  {
    path: '/list3',
    name: 'list3',
    component: list3
  },
  {
    path: '/list4',
    name: 'list4',
    component: list4
  }
];


export const routers = [
  loginRouter,
  ...appRouter,
  page500,
  page403,
  page404
];