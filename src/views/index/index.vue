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
                  <img src="static/fish.png" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/1.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/fish.png" alt="">
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
    
    <div style="display:flex">
      <div style="flex:1;background-color:#fff" >
        <img src="http://weixin.yotafood.com/mobile/asset/imgs/recharge-guide.png?v=2" style="width: 90%;border-radius: 8px;">
      </div>

    </div>
     <div style="display:flex">
      <div style="flex:1" @click="list();">
      <img src=" http://weixin.yotafood.com/mobile/asset/imgs/4-3.png?v=1" alt="">
      </div>

    </div>
   <div style="display:flex">
      <div style="flex:1" @click="optionalmeal()">
        <img src=" http://weixin.yotafood.com/mobile/asset/imgs/4-4.png?v=1" alt="">
      </div>

    </div>
   
  
    <div style="display:flex">
      <div style="flex:1">
        <img src=" http://weixin.yotafood.com/mobile/asset/imgs/4-5.png?v=1" alt="">
      </div>
       <div style="flex:1">
         <img src=" http://weixin.yotafood.com/mobile/asset/imgs/4-6.png?v=1" alt="">
      </div>
    </div>
   
   <div style="margin-bottom:40px;"></div>
    
     
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
    optionalmeal(){
       this.$router.push({name:'optionalmeal'})
    },
    custommeal(){
       this.$router.push({name:'custommadeone'})
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
  background-color: #fff;
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
img{
  width: 100%;
}

</style>

