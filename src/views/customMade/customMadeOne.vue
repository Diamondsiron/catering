<template>
  <div>
    <div class="jk-q-guide">
  
    <br>
    <div class="form-block">
        <div class="user-avatar">
            <img src="http://img.yotafood.com/static/header/2018-03-28/177612.jpg" alt="">
        </div>
    </div>
    <div class="form-block">
        <div class="input-box">
            <input id="nickName" name="nickName" type="text" placeholder="请输入昵称" value="Crazy银" class="blue-border">
        </div>
    </div>
    <div class="form-block form-block-margin-top">
        <h4 class="title">出生年份</h4>
        <div class="input-box">
            <mu-date-picker hintText="1988-01-01" v-model="value" class="black-border" style="width:200px"/> 
           
        </div>
    </div>
    <div class="form-block-btn">
        <button class="but-yellow" @click="goto();">下一步</button>
    </div>
</div>
  </div>
  
</template>
<script>

  export default{
    name:'',
    data(){

      return{

      }

    },
    methods:{
        goto(){
             this.$router.push({name:'custommadetwo'})
        }

    }

  }

</script>
<style scoped>
.jk-q-guide .form-block {
    text-align: center;
    padding: 0;
    margin: 20px 0;
}
.jk-q-guide .form-block .user-avatar {
    display: inline-block;
    margin: 0 auto;
    position: relative;
}
.jk-q-guide .form-block .user-avatar img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 3px solid #3FDABF;
    display: block;
}
.jk-q-guide .form-block {
    text-align: center;
    padding: 0;
    margin: 20px 0;
}
.jk-q-guide .form-block .input-box {
    padding: 0 40px;
    text-align: center;
}
.jk-q-guide .form-block .input-box input.blue-border {
    border: 1px solid #3FDABF;
    border-radius: 25px;
    height: 48px;
    padding: 0 20px;
    color: #333;
    font-weight: normal;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: none;
    font-weight: lighter;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}
.jk-q-guide .form-block.form-block-margin-top {
    margin-top: 30px;
}
.jk-q-guide .form-block {
    text-align: center;
    padding: 0;
    margin: 20px 0;
}
.jk-q-guide .form-block .title {
    font-weight: lighter;
    font-size: 14px;
    color: #333;
    margin: 0;
}
.jk-q-guide .form-block .input-box {
    padding: 0 40px;
    text-align: center;
}
.jk-q-guide .form-block-btn {
    text-align: center;
    margin-top: -10px;
    margin-bottom: 30px;
}
.jk-q-guide .form-block-btn button {
    width: 300px;
    height: 82px;
    display: inline-block;
    padding: 0;
    background: url(../../../static/jk-q-guide-but-yellow.png) no-repeat center;
    background-size: 300px 82px;
    border: none;
    outline: none;
}
.jk-q-guide .form-block .input-box input.black-border {
    border: none;
    border-bottom: 1px solid #EDEDED;
    padding: 0;
    margin: 0;
    text-align: center;
    height: 54px;
    line-height: 54px;
    font-size: 22px;
    display: inline-block;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: none;
    width: 200px;
    color: #333;
    font-weight: bold;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    font-weight: normal;
    appearance: none;
    font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}

</style>

