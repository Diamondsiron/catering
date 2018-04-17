<template>
  <div>
    <div class="user">
        <img src="http://img.yotafood.com/static/header/2018-03-28/177612.jpg">
        <span>彰明较著</span>
    </div>
    <ul class="user-list">
      <li>
         <router-link :to="{ path: '/information'}" >187********</router-link>
      </li>
       <li>
         <router-link :to="{ path: '/charge'}" >余额</router-link>
      </li>
       <li>
         <router-link :to="{ path: '/integral'}" >积分</router-link>
      </li>
       <li>
         <router-link :to="{ path: '/remaining'}" >剩余套餐</router-link>
      </li>
       <li>
         <router-link :to="{ path: '/myorder'}" >我的订单</router-link>
      </li>
       <li>
         <router-link :to="{ path: '/address'}" >配送地址</router-link>
      </li>
       <li>
         <router-link :to="{ path: '/pwd'}" >修改密码</router-link>
      </li>
       
        <li>
         <router-link :to="{ path: '/wx'}" >微信认证</router-link>
      </li>


    </ul>
    <div class="logout">
      <span><a href="javascript:void(0)">退出登录</a></span>
    </div>
     <Tabs></Tabs>
  </div>
  
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Tabs: () => import("@/components/common/tabs.vue")
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: none;
}
.user {
  background: #fff;

  padding: 20px;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #c7c6ca;
  margin: 30px 0 0;
  border-top: 1px solid #cac9ce;
}
.user img {
  width: 60px;
  height: 60px;
  -moz-border-radius: 45px;
  -webkit-border-radius: 45px;
  border-radius: 45px;
  margin: 0 20px 0 0;
}
.user-list {
  margin: 10px 0;
  border-top: 1px solid #e6e6e6;
  background: #fff;
  text-align: left;
}
.user-list li {
  border-bottom: 1px solid #e6e6e6;
  font-size: 14px;
  line-height: 44px;

  background-size: 18px 18px;
}
.logout {
  margin: 10px 0 0;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  background: #fff;
  line-height: 42px;
  font-size: 14px;
}
a {
  color: black;
}
</style>