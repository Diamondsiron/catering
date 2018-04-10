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
      <div style="width:300px">
        <div style="display:flex">
          <div style="flex:0 0 80px"><button class="btn">午餐</button></div>
          <div style="flex:1"> 
              <button class="cut "></button>
              <input class="num" value="0">
               <button class="add " ></button>
          </div>
          <div  style="flex:1"></div>
        </div>
        <div style="display:flex">
           <div style="flex:0 0 80px"><button class="btn">晚餐</button></div>
          <div  style="flex:1">
               <button class="cut "></button>
              <input class="num" value="0">
               <button class="add " ></button>
          </div>
          <div  style="flex:1"></div>
        </div>
       <div style="display:flex">
           <div style="flex:0 0 80px"><button class="btn">单日</button></div>
          <div  style="flex:1"><button class="btn">3日</button></div>
          <div  style="flex:1"><button class="btn">7日</button></div>

        </div>
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
.cut {
    background: url(../../../static/cut.png) no-repeat center center;
    background-size: 20px 20px;
     width: 20px;
}
button {
    padding: 0;
    height: 20px;
   
    border: none;
    display: inline-block;
}
.num {
    display: inline-block;
    vertical-align: top;
    font-size: 11px;
    line-height: 18px;
    height: 18px;
    margin: 0;
    padding: 0 2px;
    width: 28px;
    text-align: center;
    border: 1px solid #ddd;
    color: #333;
    outline: 0;
    box-shadow: none;
    border-radius: 0;
    -webkit-appearance: none;
}
.add {
   width: 20px;
    background: url(../../../static/add.png) no-repeat center center;
    background-size: 20px 20px;
}
.btn{
    width: 60px;
    background-color: #42d65a;
    border-radius: 10px;
    outline: none;
}
.btn:active {
     background-color: #aed49b;
}
</style>

