<template>
<div>
  <div class="main">
    <div class="form-box height80">
        <input type="tel" name="phone" id="phone" placeholder="手机号码" class="border-b" style="height:41px">
          <input type="password" name="password" id="password" placeholder="密码" style="height:38px">
      </div>
      <div class="form">
        <input type="number" placeholder="验证码" class="yzm" name="code" id="code">
        <button  class="btm-pink" id="seconds_code" >获取验证码</button>
      </div>
      
      <div class="form-box">
          <input type="text" placeholder="邀请码（选填）" class="" id="couponCode" name="couponCode">
      </div>
      
      <button class="btm-block">注册账号</button>
      <a href="/quicklogin/" class="text-block">登录</a>
      
  </div>
  <Tabs></Tabs>
</div>
  
</template>
<script>
export default{
  data(){
    return{

    }
  },
  components:{
    'Tabs': () => import('@/components/common/tabs.vue'),
  }
}
  
</script>
<style scoped>
.main {
    padding: 20px;
    text-align: left;
}
.height80 {
    height: 81px;
}
.form-box .border-b {
    border-bottom: 1px solid #C9C9C9;
}
button, input {
    line-height: normal;
    border: none;
    outline:none;
}
.form-box {
    border: 1px solid #C9C9C9;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background: url(../../../static/form-box.jpg) left 40px repeat-x #fff;
    margin: 0 0 20px;
   
    padding: 0 10px;
}
.form-box .border-b {
    border-bottom: 1px solid #C9C9C9;
}
.form-box input {
    display: block;
    height: 40px;
    width: 100%;
    color: #000;
    font-size: 14px;
    padding: 0;
    outline: none;
    border: none;
    box-shadow: none;
}
.form {
    margin: 0 0 20px;
}
.yzm {
    width: 30%;
    float: left;
    height: 40px;
    border: 1px solid #C9C9C9;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    outline: none;
    box-shadow: none;
    color: #000;
    padding: 0 10px;
}
.form button {
    float: right;
    width: 60%;
    
    height: 42px;
    background: #F05C6D;
    color: #fff;
}
.form:after {
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}

button {
    background: #F05C6D;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    height: 42px;
    line-height: 42px;
    color: #fff;
    font-size: 14px;
}
.btm-block {
    display: block;
    width: 100%;
}
.text-block {
    margin: 20px 0 0;
    display: block;
    font-size: 14px;
    text-align: center
}
a {
    text-decoration: none;
    color: #EE5E6F;
}
</style>

