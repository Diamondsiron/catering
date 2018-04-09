<template>
  <div>
    <header>
      <span class="col-0">图标</span>
      <span class="col-1">安心套餐</span>
    </header>
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
                  <img src="static/1.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/1.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/1.jpg" alt="">
                </div>
            </CarouselItem>
        </Carousel>
      </div>
      <div class="row">
        <div class="col">
          文字描述
        </div>
        <div class="col">
          用户评论
        </div>

      </div>
      <div>
        $38.00 $48.00
      </div>
      <div>
        <datebar></datebar>
      </div>
      <div>
        <span>若需要随餐增加点心，汤品，可在订单确认页面购买</span>
        <button @click="buy()">购买套餐</button>
      </div>
      <div>
         <ShopCart></ShopCart>
      </div>
    </div>

  </div>
</template>
<script>
export default{
  data(){
    return{

    }
  },
   components:{
      'ShopCart': () => import('@/components/common/shopcart.vue'),
     'datebar': () => import('@/components/common/datebar.vue')
  },
  methods:{
    buy(){
       this.$router.push({name:'orderform'})
    }
  }

}
  
</script>
<style scoped>
header{
  display: flex;
  background-color: aqua;
  height: 40px;
}
.col-0{
  flex:0,0,40px
}
.col-1{
  flex: 1;
  margin: 10px;
  background-color: aqua
}
.row{
  display: flex;
}
.col{
  flex: 1;
}

</style>

