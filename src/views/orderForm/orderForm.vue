<template>
  <div style="background-color:#e6e6e6;">
    <div class="order-form">
      <ul>
         <li class="list-item">
           <span>名称</span>
            <span>电话</span>
          <p>地址</p>
         
        </li>
         <li class="list-item line">
          <span>午餐配送时间</span>
          <span class="selective">12：00-12：45</span>
        </li>
         <li class="list-item line">
          <span>支付方式</span>
          <span class="selective">微信支付</span>
        </li>
      </ul>
      <ul style="margin-top:10px;">
        <li class="list-item">
          2018年04月10日 星期二
        </li>
         <li class="list-item line">
          <p>【午餐】极致瘦身：极致纤体餐</p>
        </li>
      </ul>
       <ul style="margin-top:10px;background-color: #fff;">
        <li class="list-item">
          <span>餐品费</span>
        </li>
          <li class="list-item line">
          <span>配送费</span>
        </li>
         <li class="list-item line">
          <span>包装费</span>
        </li>
          <li class="list-item line">
          <span>抵用券</span>
        </li>
          <li class="list-item line">
          <span>余额</span>
        </li>
          <li class="list-item line">
          <span>实际支付</span>
        </li>
      </ul>
      <ul style="margin-top:10px;">
        <li class="list-item">
          <span>抵用券</span>
        </li>
         <li class="list-item line">
          <span>支付余额</span>
        </li>
         <li class="list-item line">
          <span>买家留言</span>
          <input type="text" placeholder="输入留言" name="special" id="special">
        </li>
      </ul>
      <div>
        充值送余额
      </div>
      <div class="bar-order-confirm-height"></div>
      <footer>
        <div class="col">
          47
        </div>
        <div class="col">
          确认订单
        </div>

      </footer>

    </div>
  </div>
  
</template>
<script>

  export default{

  }
  
</script>
<style scoped>
.order-form{
  text-align: left;
  background-color: #e6e6e6;
}
footer{
  position: fixed;
  height: 50px;
  width: 100%;
  bottom: 0px;
  display: flex
}
.col{
  flex: 1;
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
    height: 100px;
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

</style>

