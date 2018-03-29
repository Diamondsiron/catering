<template>
  <div>
    <div class="user">
        <img src="http://img.yotafood.com/static/header/2018-03-28/177612.jpg">
    </div>
    <ul class="user-list">
      <li>
        <a href="javascript:void(0)">邀请好友</a>
      </li>
      <li>
        <a href="javascript:void(0)">同楼拼餐</a>
      </li>
      <li>
        <a href="javascript:void(0)">电话</a>
      </li>
      <li>
        <a href="javascript:void(0)">余额</a>
      </li>
      <li>
        <a href="javascript:void(0)">积分</a>
      </li>

    </ul>
    <div class="logout">
      <span><a href="javascript:void(0)">退出登录</a></span>
    </div>
    
  </div>
  
</template>
<script>
export default{
  name:'home',
  data(){
    return{

    }
  },
  components:{
     'Tabs': () => import('@/components/common/tabs.vue'),
  }
  
}
  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  list-style: none
}
.user{
      background: #fff;
   
    padding: 20px;
    text-align: left;
    font-size: 14px;
    border-bottom: 1px solid #C7C6CA;
    margin: 30px 0 0;
    border-top: 1px solid #CAC9CE;
}
.user img {
    width: 60px;
    height: 60px;
    -moz-border-radius: 45px;
    -webkit-border-radius: 45px;
    border-radius: 45px;
    margin: 0 20px 0 0;
}
.user-list{
  margin: 10px 0;
    border-top: 1px solid #E6E6E6;
    background: #fff;
    text-align: left;
}
.user-list li {
    border-bottom: 1px solid #E6E6E6;
    font-size: 14px;
    line-height: 44px;
    
    background-size: 18px 18px;
}
.logout {
    margin: 10px 0 0;
    border-top: 1px solid #E6E6E6;
    border-bottom: 1px solid #E6E6E6;
    background: #fff;
    line-height: 42px;
    font-size: 14px;
}

</style>