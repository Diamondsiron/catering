import Vue from 'vue'
import Router from 'vue-router'
import {routers, appRouter} from './router';

Vue.use(Router)

const RouterConfig = {
  
  routes: routers
};

export const router= new Router(RouterConfig)

router.beforeEach((to,from,next)=>{
  //全局守卫判断跳转 实际场景是增加对404或者需要登录的也面进行判断
  //console.log("你过来呀")
  function check(value,routers){
    for(let i = 0; i < routers.length; i++){
    // console.log(value,routers[i].name);
     
      if(value==routers[i].name){
        return true
      }
    }
    return false

  }
  //console.log(to.name,routers)
  if(check(to.name,routers)){
    //console.log("ok")
    next(true);
  }else{
    //console.log("no")
   // next(false);
  }
  
  
})
router.afterEach((to) => {
 // console.log("我过来了")
});
