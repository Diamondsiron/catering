import home from '@/views/home/home.vue'
import appointment from '@/views/appointment/appointment.vue'
import index from '@/views/index/index.vue'
import indent from '@/views/indent/indent.vue'
import meal from '@/views/meal/meal.vue'
import custommeal from '@/views/customMeal/customMeal.vue'
import optionalmeal from '@/views/optionalMeal/optionalMeal.vue'
import mealdetail from '@/views/mealDetail/mealDetail.vue'
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
import orderform from '@/views/orderForm/orderForm.vue'
import orderdetail from '@/views/orderDetail/orderDetail.vue'
import pwd from '@/views/pwd/pwd.vue'
import remaining from '@/views/remaining/remaining.vue'
import wx from '@/views/wx/wx.vue'
import Oauth from '@/views/Oauth/Oauth.vue'
import list from '@/views/list/list.vue'
import parabola from '@/views/parabola/parabola.vue'
import bannershow from '@/views/bannerShow/bannerShow.vue'
import notice from '@/views/notice/notice.vue'
import attendance from '@/views/attendance/attendance.vue'
import attendancelist from '@/views/attendanceList/attendanceList.vue'
import recharge from '@/views/recharge/recharge.vue'
import custommadeone from '@/views/customMade/customMadeOne.vue'
import custommadetwo from '@/views/customMade/customMadeTwo.vue'
import custommadethree from '@/views/customMade/customMadeThree.vue'
import custommadefour from '@/views/customMade/customMadeFour.vue'
import custommadefive from '@/views/customMade/customMadeFive.vue'




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
  
];


export const routers = [
  loginRouter,
  ...appRouter,
  page500,
  page403,
  page404
];