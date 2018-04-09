<template>
  <div class="container">
    <div class="bar">
      <div class="bar-banner">
         <Carousel v-model="value1" loop>
            <CarouselItem>
                <div class="demo-carousel" @click="bannershow()">
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
      <div class="bar-index-quick-nav">
          <div class="col" @click="attendance();">
           签到
          </div>
          <div class="col">
           排餐
          </div>
          
          <div class="col" @click="recharge();">
            充值
          </div>
      </div>
    </div>
    <div class="img-box">

    </div>
    <Row>
        <Col span="24">动态活动专区</Col>
    </Row>
    <div>
      <h3></h3>
        <Row>
            <Col span="24">
            <div  @click="list();">
              安心套餐
            </div>
            </Col>
           
        </Row>
    </div>
    <div>
      <h3>清新沙拉</h3>
        <Row>
            <Col span="24">自选套餐图文展示</Col>
        </Row>
    </div>
    <div>
      <h3>母婴营养</h3>
        <Row>
            <Col span="24">量身套餐图文展示</Col>
        </Row>
    </div>
   
   
    
     
    <Tabs></Tabs>
    
  
  </div>
</template>
<script>
import axios from 'axios';
export default{
  name:'index',
  data () {
            return {
                value1: 0
            }
        },
  components:{
   'Tabs': () => import('@/components/common/tabs.vue'),
  },
  methods:{
     promise(){
       var date=new Date();
      var timer=date.getTime().toString();
      axios.get("api"+'?'+timer).then(function(res){
          console.log(res.data.msg);
          return res
        })
    },
    
    async(){

    },
    bannershow(){
      this.$router.push({name:'bannershow'})
    },
    list(){
       this.$router.push({name:'list'})
    },
    attendance(){
      this.$router.push({name:'attendance'})
    },
    recharge(){
      this.$router.push({name:'recharge'})
    },
    ajax(){
      return new Promise(function(resolve, reject){
          resolve(axios.get("api"+'?t='+timer).then(function(res){
          console.log(res.data.msg);
          return res
        }))
      })
    }

  }

}
  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: block;
}
.demo-carousel{
  background-color: red;
  height: 200px;
}
.bar-index-quick-nav{
  display: flex;
  padding: 15px;
}
.col{
  flex: 1;
}
.img-box{
      padding: 0 10px;
    background: none;
    height: 30px;
}
footer{
 position: fixed;
 display: flex;
  bottom: 0px;
  height: 60px;
  width: 100%;
  background-color: yellow
}

</style>

