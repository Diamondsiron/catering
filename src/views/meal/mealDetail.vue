<template>
  <div>
    <headers>
      
    </headers>
    <div class="product">
      <div>
         <Carousel  loop>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/1.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/fish.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/1.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/fish.jpg" alt="">
                </div>
            </CarouselItem>
        </Carousel>
      </div>
      <div class="row">
        <div class="col p10">
          <h4>高蛋白主菜盒</h4>
           <p class="name">外婆菜炒鸡蛋 / （鸿运当头）墨西哥烹汁牛仔粒LM / 三鲜卷LB / </p>
        </div>
        <div class="col p10">
          <h4>999+</h4>
          <p style="font-size: 12px;">用户评论</p> 
          <button class="radius">查看</button>
        </div>

      </div>
      <div class="content">
        <span >$38.00</span>
        <s >$48.00</s> 
      </div>
      <div >
        <datebar></datebar>
      </div>
     
      <div>
        <span  class="m0">若需要随餐增加点心，汤品，可在订单确认页面购买</span>
        <button @click="buy()" class="buy" >购买套餐</button>
      </div>
      <div>
        <div style="margin-bottom:60px"></div>
        
      </div>
    </div>
   <ShopCart></ShopCart>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {
    headers: () => import("@/components/common/headers.vue"),
    ShopCart: () => import("@/components/common/shopcart.vue"),
    datebar: () => import("@/components/common/datebar.vue")
  },
  methods: {
    buy() {
      this.$router.push({ name: "orderform" });
    }
  }
};
</script>
<style scoped>
.content {
  text-align: left;
  margin-left: 10px;
}
.content span {
  color: red;
  font-weight: bold;
}
.content s {
  color: rgb(153, 153, 153);
  margin-left: 5px;
}
.radius {
  border-radius: 5px;
  border: none;
  font-size: 14px;
  width: 40px;
}
.buy {
  width: 90%;
  border-radius: 5px;
  border: none;
  background-color: yellow;
  color: #333;
}
.m0 {
  margin: 0 auto;
  font-size: 14px;
}
.name {
  font-size: 12px;
  text-align: left;
}
header {
  display: flex;
  background-color: aqua;
  height: 40px;
}
.col-0 {
  flex: 0, 0, 40px;
}
.col-1 {
  flex: 1;
  margin: 10px;
  background-color: aqua;
}
.row {
  display: flex;
}
.col {
  flex: 1;
}

div {
  background-color: #fff;
}
.p10 {
  padding: 10px 10px 10px 10px;
}
</style>

