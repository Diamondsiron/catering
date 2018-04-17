<template>
  <div>
    <div class="main">
      <div class="form-box">
          <input type="tel" name="phone" id="phone" value="18722372579" placeholder="新手机号码">
        </div>
        <div class="form">
          <input type="number" class="yzm" name="code" placeholder="验证码" id="code">
          <button  class="btm-pink" id="seconds_code">获取验证码</button>
        </div>
        <button class="btm-block button-click">修改手机号码</button>
    </div>

  </div>
  
</template>
<script>
export default {
  components: {
    Tabs: () => import("@/components/common/tabs.vue")
  }
};
</script>
<style scoped>
.main {
  padding: 20px;
}
.form-box {
  border: 1px solid #c9c9c9;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background: url(../../../static/form-box.jpg) left 40px repeat-x #fff;
  margin: 0 0 20px;
  height: 40px;
  padding: 0 10px;
}
.form-box input {
  display: block;
  height: 38px;
  width: 100%;
  color: #000;
  font-size: 14px;
  padding: 0;
  outline: none;
  border: none;
  box-shadow: none;
  line-height: normal;
}
.form {
  margin: 0 0 20px;
}
.yzm {
  width: 30%;
  float: left;
  height: 40px;
  border: 1px solid #c9c9c9;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  outline: none;
  box-shadow: none;
  color: #000;
  padding: 0 10px;
}
.form .btm-pink {
  background: #f05c6d;
  color: #fff;
}
.form button {
  float: right;
  width: 60%;
  background: #d4d4d4;
  height: 42px;
  color: #4f4a4a;
}
.form:after {
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.btm-block {
  display: block;
  width: 100%;
}
button {
  background: #f05c6d;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  height: 42px;
  line-height: 42px;
  color: #fff;
  font-size: 14px;
  border: none;
  padding: 0 15px;
  -webkit-appearance: button;
  cursor: pointer;
  outline: 0 none;
  vertical-align: middle;
}
</style>

