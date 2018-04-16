<template>
  <div class="day-14">

    
  <div class="img-list">
    <img src="http://img.yotafood.com/static/img/20180327/1522124392099.jpg" alt="">
    <img src="http://img.yotafood.com/static/img/20180327/1522124408208.jpg" alt="">
    <img src="http://img.yotafood.com/static/img/20180327/1522124415787.jpg" alt="">
    <img src="http://img.yotafood.com/static/img/20180327/1522124449026.jpg" alt="">
    <img src="http://img.yotafood.com/static/img/20180327/1522124465946.jpg" alt="">
    <img src="http://img.yotafood.com/static/img/20180327/1522124632808.jpg" alt="">
    <img src="http://img.yotafood.com/static/img/20180327/1522124651969.jpg" alt="">
    <img src="http://img.yotafood.com/static/img/20180327/1522124669058.jpg" alt="">
    <img src="http://img.yotafood.com/static/img/20180327/1522125469775.jpg" alt="">
    <img src="http://img.yotafood.com/static/img/20180327/1522124529034.jpg" alt="">
   </div>

      
      <div class="footer">
          <div class="col">
              <button   class="btn_n" @click="notice();">购买须知</button>
          </div>
          <div class="col">
              <button type="button" @click="buy()" class="btn_y">立刻购买</button>



          </div>
      </div>
      <div class="popup-mask hide"   v-bind:class="{show:show, hidden:!show}"></div>
      <div class="popup-meal-shop hide" v-bind:class="{show:show, hidden:!show}">
        <div class="header" @click="buy();">
           关闭
            <i class="fa fa-times pull-right" aria-hidden="true" ></i>
        </div>
        
        <div class="scroll-box">
            <div class="block">
                每天配送两次：<p class="f-red color_c" >1.午餐+下午加餐；2.晚餐+次日早餐+次日上午加餐</p>
            </div>
            <div class="block">
                <div class="block-header">选择方案</div>
                <ul class="meal-items-list">
                  
                        <li class="select on color_c" >15天工作日极速纤体套餐（早餐+午餐+晚餐）</li>
                  
                  
                  
                  <div class="clear"></div>
                  
                </ul>
            </div>
            
        </div>
        
        
        <div class="bottom-bar">
            <span class="f-red" id="price">￥1698.00</span>
            <button class="btn btn-lg btn-red pull-right w100"  onclick="buyOperate()">下单</button>
        </div>
    </div>
      
  </div>
  
</template>
<script>

export default{
  data(){
    return{
       bottomPopup: false,
      topPopup: false,
      leftPopup: false,
      rightPopup: false,
      show:false,

    }
  },
  methods:{
    notice(){
      this.$router.push({ name: 'notice'})

    },
    buy(){
      this.show = !this.show;

    },
     open (position) {
      
    },
    close (position) {
      
    }

  }

}
  
</script>
<style scoped>
.clear{
    clear: both;
}
.w100{
   width: 100px 
}
.color_c{
    color: #c57784;
}
.day-14 .img-list img {
    display: block;
    width: 100%;
}
.day-14 .day-14-buy-height {
    height: 50px;
}
.day-14 .day-14-buy {
    border-top: 1px solid #ededed;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
}
.footer{
 position: fixed;
 display: flex;
  bottom: 0px;
  height: 50px;
 
  width: 100%;
  background-color: rgb(92, 92, 86);
  justify-content:center;
   align-items:center;
}
.col{
  flex: 1;
 
}
.col>.btn_y{
  background-color: #f6ed54;
    font-weight: normal;
        border: none;
    width: 100%;
    height: 50px;
}
.col>.btn_n{
  background-color:rgb(92, 92, 86);
    font-weight: normal;
        border: none;
    width: 100%;
    height: 50px;
}
.popup-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.5);
}
.popup-meal-shop {
    text-align: left;
    z-index: 11;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
}
.show{
  display: block;
}
.hidden{
   display: none;
}
.popup-meal-shop .header {
    font-size: 16px;
    line-height: 1;
    padding: 10px 0;
        text-align: right;
}
.popup-meal-shop .scroll-box {
    max-height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
}
.popup-meal-shop .block {
    margin-top: 10px;
    font-size: 14px;
}
.popup-meal-shop .bottom-bar {
    border-top: 1px solid #bbb;
    padding: 10px 0 0;
}
.popup-meal-shop .bottom-bar span {
    line-height: 33px;
}
.btn-red {
    background-color: #f7d632;
    color: #333;
        float: right;
    outline: none;
    border: none;
    border-radius: 8px;
}

</style>

