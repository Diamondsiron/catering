<template>
  <div>
    <div class="jk-q-guide">
      
      <div class="form-block form-block-margin-top">
          <h4 class="title">性别</h4>
          <div class="sex-box female">
              <img src="static/female.png" alt="" class="female  sexclass" sex="female" sexvalue="0">
              <img src="static/male.png" alt="" class="male sexclass" sex="male" sexvalue="1">
              <div class="on"></div>
              <span class="label female">女</span>
              <span class="label male">男</span>
              <input type="hidden" name="sex" id="sex" value="0">
              
          </div>
      </div>
      <div class="form-block form-block-margin-top">
          <h4 class="title">身高</h4>
         <rulerss rulerWrapper="rulerWrapper" rulerScroller="rulerScroller" unit="cm" :listss='array'></rulerss>
         
          
      </div>
      <div class="form-block">
          <h4 class="title">体重</h4>
          
          <rulerss rulerWrapper="Wrapper" rulerScroller="Scroller" unit="kg" :listss='list'></rulerss>
          
      </div>
      <div class="form-block-btn form-block-margin-top">
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
          array:[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200],
          list:[0,10,20,30,40,50,60,70,80,90,100]
      }

    },
    components:{
        'rulerss': () => import('@/components/common/ruler.vue')
    },
    methods:{
         goto(){
             this.$router.push({name:'custommadethree'})
        }

    }

  }

</script>
<style scoped>
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
.jk-q-guide .form-block .sex-box {
    display: block;
    margin: 10px auto 0;
    width: 190px;
    border-radius: 25px;
    height: 50px;
    background-color: #3fdabf;
    position: relative;
}
.jk-q-guide .form-block .sex-box img.female {
    width: 30px;
    height: 30px;
    z-index: 10;
    position: absolute;
    top: 10px;
    left: 35px;
}
.jk-q-guide .form-block .sex-box img.male {
    width: 30px;
    height: 30px;
    z-index: 10;
    position: absolute;
    top: 10px;
    right: 40px;
}
.jk-q-guide .form-block .sex-box .on {
    height: 48px;
    width: 104px;
    display: block;
    background-color: #fff;
    position: absolute;
    top: 1px;
    border-radius: 24px;
}
.jk-q-guide .form-block .sex-box.female .on {
    left: 1px;
}
.jk-q-guide .form-block .sex-box .female {
    position: absolute;
    left: 20px;
    top: 18px;
}
.jk-q-guide .form-block .sex-box .label {
    line-height: 1;
    display: inline-block;
    font-size: 14px;
    color: #00bc9b;
}
.jk-q-guide .form-block .sex-box .male {
    position: absolute;
    right: 20px;
    top: 18px;
}
.jk-q-guide .form-block .sex-box .label {
    line-height: 1;
    display: inline-block;
    font-size: 14px;
    color: #00bc9b;
}
.ruler .value-box .value {
    font-size: 32px;
    height: 54px;
    line-height: 54px;
    padding: 0;
}
.ruler .value-box .unit {
    font-size: 16px;
    color: #333;
}
.ruler .rulerWrapper {
    height: 90px;
    overflow: hidden;
    position: relative;
    margin-top: 10px;
}
.ruler .rulerWrapper .rulerWrapper-mask-left {
    position: absolute;
    top: 0;
    left: 0;
    height: 90px;
    width: 120px;
    z-index: 100;
}
.ruler .rulerWrapper .rulerWrapper-mask-right {
    position: absolute;
    top: 0;
    right: 0;
    height: 90px;
    width: 120px;
    z-index: 100;
}
.ruler .rulerWrapper .rulerScroller {
    position: absolute;
    top: 30px;
    
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
.ruler .rulerWrapper .sizeNo {
    position: absolute;
    color: #333;
    top: 35px;
    display: block;
    text-align: center;
}
.ruler .rulerWrapper .rulerScroller ul {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    padding: 0;
    width: 100px;
    height: 30px;
    float: left;
    border-right: 1px solid #666;
    position: relative;
}
.ruler .rulerWrapper .rulerScroller ul li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    width: 10px;
    float: left;
    border-right: 1px solid #666;
    height: 20px;
}

</style>

