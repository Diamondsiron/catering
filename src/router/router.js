import home from '@/views/home/home.vue'
import appointment from '@/views/appointment/appointment.vue'
import index from '@/views/index/index.vue'
import indent from '@/views/indent/indent.vue'
import meal from '@/views/meal/meal.vue'
import custommeal from '@/views/meal/customMeal.vue'
import optionalmeal from '@/views/meal/optionalMeal.vue'
import mealdetail from '@/views/meal/mealDetail.vue'

import test from '@/views/test/test.vue'

import address from '@/views/address/address.vue'
import insertaddress from '@/views/address/insertaddress.vue'
import charge from '@/views/charge/charge.vue'
import coupon from '@/views/coupon/coupon.vue'
import groupmeal from '@/views/meal/groupmeal.vue'

import information from '@/views/information/information.vue'
import updatename from '@/views/information/updateName.vue'
import updatetel from '@/views/information/updateTel.vue'
import integral from '@/views/integral/integral.vue'
import Invitation from '@/views/Invitation/Invitation.vue'
import order from '@/views/order/order.vue'
import myorder from '@/views/order/myorder.vue'
import orderform from '@/views/order/orderForm.vue'
import orderdetail from '@/views/order/orderDetail.vue'
import pwd from '@/views/sign/pwd.vue'
import remaining from '@/views/remaining/remaining.vue'
import wx from '@/views/wx/wx.vue'
import Oauth from '@/views/Oauth/Oauth.vue'
import list from '@/views/meal/list.vue'
import parabola from '@/views/parabola/parabola.vue'
import bannershow from '@/views/index/bannerShow.vue'
import notice from '@/views/attendance/notice.vue'
import attendance from '@/views/attendance/attendance.vue'
import attendancelist from '@/views/attendance/attendanceList.vue'
import recharge from '@/views/recharge/recharge.vue'
import custommadeone from '@/views/customMade/customMadeOne.vue'
import custommadetwo from '@/views/customMade/customMadeTwo.vue'
import custommadethree from '@/views/customMade/customMadeThree.vue'
import custommadefour from '@/views/customMade/customMadeFour.vue'
import custommadefive from '@/views/customMade/customMadeFive.vue'
import sign from '@/views/sign/sign.vue'




export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
      title: 'Login - 登录'
  },
  component: () => import('@/views/sign/login.vue')
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
    path: '/optionalmeal',
    name: 'optionalmeal',
    component: optionalmeal
  },
  {
    path: '/custommeald',
    name: 'custommeal',
    component: custommeal
  },
  {
    path: '/mealdetail',
    name: 'mealdetail',
    component: mealdetail
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/address',
    name: 'address',
    component: address
  },
  {
    path: '/insertaddress',
    name: 'insertaddress',
    component: insertaddress
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
    path: '/information',
    name: 'information',
    component: information
  },
  {
    path: '/updatename',
    name: 'updatename',
    component: updatename
  },
  {
    path: '/updatetel',
    name: 'updatetel',
    component: updatetel
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
    path: '/myorder',
    name: 'myorder',
    component: myorder
  },
  {
    path: '/orderform',
    name: 'orderform',
    component: orderform
  },
  {
    path: '/orderdetail',
    name: 'orderdetail',
    component: orderdetail
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
    path: '/list',
    name: 'list',
    component: list
  },
  {
    path: '/parabola',
    name: 'parabola',
    component: parabola
  },
  {
    path: '/bannershow',
    name: 'bannershow',
    component: bannershow
  },
  {
    path: '/notice',
    name: 'notice',
    component: notice
  },
  {
    path: '/attendance',
    name: 'attendance',
    component: attendance
  },
  {
    path: '/attendancelist',
    name: 'attendancelist',
    component: attendancelist
  },
  {
    path: '/recharge',
    name: 'recharge',
    component: recharge
  },
  {
    path: '/custommadeone',
    name: 'custommadeone',
    component: custommadeone
  },
  {
    path: '/custommadetwo',
    name: 'custommadetwo',
    component: custommadetwo
  },
  {
    path: '/custommadethree',
    name: 'custommadethree',
    component: custommadethree
  },
  {
    path: '/custommadefour',
    name: 'custommadefour',
    component: custommadefour
  },
  {
    path: '/custommadefive',
    name: 'custommadefive',
    component: custommadefive
  },
  {
    path: '/sign',
    name: 'sign',
    component: sign
  }
  
];


export const routers = [
  loginRouter,
  ...appRouter,
  page500,
  page403,
  page404
];