<template>
  <div class="content">
    <div class="order-form">
     
      <ul>
         <li class="list-item padding-right-25" >
            <span class="title red">请完成支付，订单将在12分33秒后自动取消</span>
         
        </li>
         <li class="list-item line h44">
          <span class="title">订单号 <span class="red">取消订单</span></span>
          <span class="selective">2018040910365338430386</span>
         
        </li>

       
      </ul>
      <ul class="margin-top-10">
         <li class="list-item" >
           <div>
             <p class="tel"><span >123</span> 18388888888</p>
             <p class="memo address" ><span class="tag-blue">默认</span>北京市-&gt;朝阳区-&gt;朝阳区远洋新悦2期 123</p>
            
           </div>
         
        </li>
      </ul>
      <ul class="margin-top-10">
       
         <li class="list-item line" >
          <div class="list-img-box">
                <img class="list-img" src="http://img.yotafood.com/static/img/20170213/1486983688080.jpg">
                <p>【午餐】均衡瘦身：均衡纤体餐</p>
                <span class="price">¥ 38</span>
                <span class="num">× 1</span>
            </div>
        </li>
      </ul>
      <ul>
         <li class="list-item ">
          <span>状态</span>
          <span class="selective">待支付</span>
        </li>

      </ul>
       <ul class="margin-top-10">
        <li class="list-item less">
          <span>餐品费</span>
          <span class="selective black">$38</span>
        </li>
          <li class="list-item line less">
          <span>配送费</span>
          <span class="black margin-left-160" >x1</span>
           <span class="selective black">$6</span>
        </li>
         <li class="list-item line less">
          <span>包装费</span>
          <span class="black margin-left-160" >x1</span>
           <span class="selective black">$3</span>
        </li>
          <li class="list-item line less">
          <span>抵用券</span>
           <span class="selective black">没有使用抵用卷</span>
        </li>
          <li class="list-item line less">
          <span>余额</span>
          <span class="selective black">$0</span>
        </li>
          <li class="list-item line less">
          <span>实际支付</span>
          <span class="selective red">$47</span>
        </li>
      </ul>
      <div class="list-item pd10" >
	    <div class="blcok img-box" onclick="app_prepaid()">
	        <img src="static/index-four.png?v=2">
	    </div>
    </div>
     
      <div class="bar-order-confirm-height"></div>
      <footer>
        <div class="col">
         <h4 class="tocalPrice">¥ 47</h4>
         <p class="moneyPay">余额支付：¥ 0</p>
        </div>
        <div class="col-0">
         <button type="button" class="btn_yellow">微信支付</button>
        </div>

      </footer>

    </div>
  </div>
  
</template>
<script>

  export default{
      data(){
          return{

          }
      },
      methods:{
          
      }

  }
  
</script>
<style scoped>
.pd10{
    padding-top:10px;background-color:#f4f4f4;
}
.padding-right-25{
    padding-right:25px
}
.tel{
    margin: 0; line-height: 1;font-size: 14px;
}
.tel span{
    width: 69px;margin-right: 5px;display: inline-block;
}
.address{
    color: #999;margin: 0;line-height: 1;font-size: 14px;
}
.margin-top-10{
    margin-top:10px;background-color: #fff;
}
.margin-left-160{
    margin-left:160px
}
.content{
    background-color:#e6e6e6;
}
.order-form{
  text-align: left;
  background-color: #e6e6e6;
}
footer{
  position: fixed;
  height: 50px;
  width: 100%;
  bottom: 0px;
  display: flex;
  background-color: #fff;
}
.col{
  flex: 1;
  margin-left: 20px
}
.col-0{
  flex:0  0 160px;
}
.list-item{
    background-color: #fff;
    padding: 15px 20px;
    position: relative;
    
}
.line{
  border-top: 1px solid #e6e6e6;
}
.bar-order-confirm-height {
    height: 200px;
}
.selective{
    position: absolute;
    top: 50%;
    right: 30px;
    color: #999;
    line-height: 1;
    font-size: 14px;
    margin-top: -7px;
}
.title{
   margin-top: -7px;
      line-height: 1;
    font-size: 14px;
  
}
.order-form .list-item input[type="text"] {
    text-align: right;
    width: 200px;
    border: none;
    outline: none;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -15px;
    color: #333;
}
.tag-blue{
      border: 1px solid #1dbb9b;
    color: #1dbb9b;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    border-radius: 4px;
    padding: 0;
    margin-right: 30px;
    width: 44px;
    display: inline-block;
}
.list-arrow {
    width: 8px;
    height: 14px;
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -7px;
}
.list-img-box {
    position: relative;
    padding-left: 90px;
    padding-bottom: 28px;
}
.order-form .list-item .list-img-box .list-img {
    width: 80px;
    height: 60px;
    position: absolute;
    left: 0;
    top: 0;
}
.order-form .list-item p {
    margin: 0;
    line-height: 1;
    font-size: 14px;
}
.order-form .list-item .list-img-box .price {
    position: absolute;
    bottom: 0;
    left: 90px;
    font-size: 14px;
    color: #f05d46;
}
.order-form .list-item .list-img-box .num {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 14px;
    color: #999;
}
.less{
      margin-left: 10px;
    padding-left: 10px;
    font-size: 14px;
   
    height: 34px;
    padding-bottom: 10px;
    padding-top: 10px;
}
.black{
  color: black
}
.red{
  color:red
}
.list-arrow{
    width: 8px;
    height: 14px;
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -7px;
}
.order-form .address-line {
    width: 100%;
    display: block;
}
.h44{
    height: 44px;
    padding-top: 12px;
}
.bar-recharge-ad {
    position: relative;
    margin: 10px 0;
    font-size: 12px;
    padding: 15px 110px 15px 85px;
    background-color: #fff;
}
.bar-recharge-ad img {
    position: absolute;
    top: 50%;
    margin-top: -25px;
    left: 20px;
    width: 50px;
    height: 50px;
    display: inline-block;
}
.bar-recharge-ad h4 {
    font-size: 14px;
    line-height: 1;
    margin: 0;
}
.bar-recharge-ad p {
    margin: 0;
    line-height: 1;
    margin-top: 5px;
}
.bar-recharge-ad button {
    background-color: #f7d632;
    color: #333;
    border: none;
    height: 24px;
    line-height: 24px;
    border-radius: 12px;
    padding: 0 10px;
    position: absolute;
    top: 50%;
    margin-top: -12px;
    right: 20px;
}
.tocalPrice{
      margin: 0;
    font-size: 18px;
    color: #f05d46;
    margin-top: 4px;
}
.moneyPay{
  margin: 0;
    font-size: 12px;
    color: #888;
}
.btn_yellow{
      line-height: 50px;
    background-color:#2cc431;;
    color: #333;
    width: 100%;
    text-align: center;
    border: none;
    padding: 0;
    border-radius: 0;
    outline: none;
}
.blcok.img-box {
    padding: 0 10px;
    background: none;
}
.blcok.img-box img {
    display: block;
    width: 100%;
}

</style>

