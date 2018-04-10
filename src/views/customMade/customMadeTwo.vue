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
          
          <div class="ruler">
              <div class="value-box" id="value">
                  <span class="value" id="height">175</span>
                  <span class="unit" id="unit">cm</span>
              </div>
              <div class="rulerWrapper" id="rulerWrapper">
                  <img src="static/rulerWrapper-mask-left.png" alt="" class="rulerWrapper-mask-left">
                  <img src="static/rulerWrapper-mask-right.png" alt="" class="rulerWrapper-mask-right">
              <div class="rulerScroller" style="left: -1844.5px;"><span class="sizeNo" style="left:-50px;width:100px"></span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:50px;width:100px"></span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:150px;width:100px"></span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:250px;width:100px">0</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:350px;width:100px">10</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:450px;width:100px">20</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:550px;width:100px">30</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:650px;width:100px">40</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:750px;width:100px">50</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:850px;width:100px">60</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:950px;width:100px">70</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1050px;width:100px">80</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1150px;width:100px">90</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1250px;width:100px">100</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1350px;width:100px">110</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1450px;width:100px">120</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1550px;width:100px">130</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1650px;width:100px">140</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1750px;width:100px">150</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1850px;width:100px">160</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1950px;width:100px">170</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:2050px;width:100px">180</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:2150px;width:100px">190</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:2250px;width:100px"></span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul></div><div class="rulerPointer"></div></div>
          </div>
          
      </div>
      <div class="form-block">
          <h4 class="title">体重</h4>
          
          <div class="ruler">
              <div class="value-box" id="value2">
                  <span class="value" id="weight">63</span>
                  <span class="unit" id="unit">kg</span>
              </div>
              <div class="rulerWrapper" id="rulerWrapper2">
                  <img src="static/rulerWrapper-mask-left.png" alt="" class="rulerWrapper-mask-left">
                  <img src="static/rulerWrapper-mask-right.png" alt="" class="rulerWrapper-mask-right">
              <div class="rulerScroller" style="left: -724.5px;"><span class="sizeNo" style="left:-50px;width:100px"></span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:50px;width:100px"></span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:150px;width:100px"></span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:250px;width:100px">0</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:350px;width:100px">10</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:450px;width:100px">20</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:550px;width:100px">30</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:650px;width:100px">40</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:750px;width:100px">50</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:850px;width:100px">60</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:950px;width:100px">70</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1050px;width:100px">80</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1150px;width:100px">90</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1250px;width:100px">100</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1350px;width:100px">110</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1450px;width:100px">120</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1550px;width:100px">130</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1650px;width:100px">140</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1750px;width:100px">150</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1850px;width:100px">160</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:1950px;width:100px">170</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:2050px;width:100px">180</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:2150px;width:100px">190</span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul><span class="sizeNo" style="left:2250px;width:100px"></span><ul style="width:100px"><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li><li style="width:10px"></li></ul></div><div class="rulerPointer"></div></div>
          </div>
          
      </div>
      <div class="form-block-btn form-block-margin-top">
          <button class="but-yellow" onclick="submitFun()">下一步</button>
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

</style>

