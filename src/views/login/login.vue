<template>
  <div class="login">
    <div class="login-top">
      <div class="col">
        普通登录
      </div>
      <div class="col">
        短信快捷登陆

      </div>

    </div>
    <div class="login-main">
      <form action="">
        <input type="text" placeholder="手机号码">
        <input type="text" placeholder="密码">
        <button type="submit">登录</button>

      </form>

    </div>
      

  </div>
  
</template>
<script>
  
</script>
<style scoped>
.login-top{
  display: flex;
}
.col{
  flex:1;
}
.login-main{
  padding: 10px;
  
}
.login-main input{
  display: block;
    height: 40px;
    width: 100%;
    color: #000;
    font-size: 14px;
    padding: 0;
    outline: none;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    border: 1px solid #C9C9C9;
}
button {
  width: 100%;
    background: #F05C6D;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    height: 42px;
    line-height: 42px;
    color: #fff;
    font-size: 14px;
}

</style>

