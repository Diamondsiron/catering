<template>
  <div>
    <div>
       <header style="background-color:#fff">
       <h4>我的订单</h4> 
        </header>
      
      <div>
        <ul>
          <li class="list-item">
             <span class="title">招牌煲仔饭</span>
             <span class="selective">27</span>

          </li>
           <li class="list-item">
             <span class="title">饭盒</span>
             <span class="selective">1.5</span>
            
          </li>
           <li class="list-item">
             <span class="title">蜂鸟快送</span>
             <span class="selective">2.5</span>
            
          </li>
           <li class="list-item">
             <span class="title">在线支付立减优惠</span>
             <span class="selective">10</span>
            
          </li>
           <li class="list-item">
             <span class="title">超级会员专享受</span>
             <span class="selective">5</span>
            
          </li>
           <li class="list-item">
             <span class="title">联系商家</span>
             <span class="selective">实付12</span>
            
          </li>
        </ul>
        <ul style="margin-top:10px;background-color: #fff;">
           <h4 style="text-align: left;margin-left: 20px;">配送信息</h4>
           <li class="list-item">
              <span class="title">送达时间</span>
             <span class="selective">尽快送达</span>
            
          </li>
           <li class="list-item">
              <span class="title">收货地址</span>
             <span class="selective">嘉里中心</span>
            
          </li>
           <li class="list-item">
              <span class="title">配送方式</span>
             <span class="selective">蜂鸟快送</span>
            
          </li>
        </ul>
        <ul style="margin-top:10px;background-color: #fff;">
           <h4 style="text-align: left;margin-left: 20px;">订单信息</h4>
           <li class="list-item">
              <span class="title">订单号</span>
             <span class="selective">8888888866666666</span>
            
          </li>
           <li class="list-item">
              <span class="title">支付方式</span>
             <span class="selective">在线支付</span>
            
          </li>
           <li class="list-item">
              <span class="title">下单时间</span>
             <span class="selective">2018-04-10 11：12</span>
            
          </li>
        </ul>
        
      </div>
    </div>
    <div style="margin-bottom:40px"></div>
    <Tabs></Tabs>
  </div>
</template>
  <script>
  export default{
    name:'',
    data(){
      return{
        list:[0,1,2,3]
      }
    },
    methodes:{

    },
    components:{
      'Tabs': () => import('@/components/common/tabs.vue'),
    }
    
  }
    
  </script>
  <style scoped>
.list-item{
  text-align: left;
    background-color: #fff;
    padding: 15px 20px;
    position: relative;
    
}
.title{
   margin-top: -7px;
      line-height: 1;
    font-size: 14px;
  
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
li{
  border-bottom: 1px solid #e6e6e6;
}
  
  </style>
  