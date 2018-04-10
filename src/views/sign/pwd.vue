<template>
  <div>
   <div class="adr-box">
        <div class="form-list">
            <input type="password" id="oldPwd" placeholder="密码">
        </div>
        <div class="form-list">
            <input type="password" id="nowPwd" placeholder="新密码">
        </div>
        <div class="form-list">
            <input type="password" id="nowPwd2" placeholder="确认新密码">
        </div>
        <button class="btm-w80 button-click" >修改密码</button>
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
  .adr-box {
    margin: 10px 0 0;
    border-top: 1px solid #E6E6E6;
}
.form-list {
    height: 40px;
    line-height: 40px;
    background: #fff;
    padding: 0 20px;
    border-bottom: 1px solid #E6E6E6;
    text-align: left;
}
.form-list input {
  height: 38px;
    font-size: 14px;
    border: none;
    padding: 0;
    width: 100%;
    outline: none;
}
.form-list:after {
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}
.btm-w80 {
    width: 80%;
   
    display: block;
    margin: 15px auto 0;
    border-radius: 5px;
    height: 42px;
    line-height: 42px;
    color: #fff;
    font-size: 14px;
    background: #F05C6D;
    border: none;
    padding: 0 15px;
        outline: 0 none;
    vertical-align: middle;
}

  
  </style>
  