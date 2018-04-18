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
      <div class="bar-index-quick-nav" style="margin-top: 10px;">
          <div class="col" @click="attendance();" style="border-right:2px solid #f2f2f2;">
           签到
          </div>
         
          
          <div class="col" @click="recharge();">
            充值
          </div>
      </div>
    </div>
    
    <div class="row" style="margin-top: 10px;">
      <div style="flex:1;background-color:#fff" >
        <img src="http://weixin.yotafood.com/mobile/asset/imgs/recharge-guide.png?v=2" class="radius" >
      </div>

    </div>
     <div class="row" style="margin-top: 10px;">
      <div class="col-1" @click="list();">
      <img src="static/3.png" alt="">
      </div>

    </div>
   <div class="row">
      <div class="col-1" @click="optionalmeal()">
        <img src="static/2.png" alt="">
      </div>

    </div>
   
  
    <div class="row">
      <div class="col-1" @click="custommeal()">
        <img src="static/5.png" alt="">
      </div>
       <div class="col-1" @click="custommeal()">
         <img src="static/6.png" alt="">
      </div>
    </div>
   
   <div class="margin_40px"></div>
    
     
    <Tabs></Tabs>
    
  
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      value1: 0
    };
  },
  components: {
    Tabs: () => import("@/components/common/tabs.vue")
  },
  methods: {
    promise() {
      var date = new Date();
      var timer = date.getTime().toString();
      axios.get("api" + "?" + timer).then(function(res) {
        console.log(res.data.msg);
        return res;
      });
    },
    
    async() {},
    bannershow() {
      this.$router.push({ name: "bannershow" });
    },
    list() {
      this.$router.push({ name: "list" });
    },
    optionalmeal() {
      this.$router.push({ name: "optionalmeal" });
    },
    custommeal() {
      this.$router.push({ name: "custommadeone" });
    },
    attendance() {
      this.$router.push({ name: "attendance" });
    },
    recharge() {
      this.$router.push({ name: "recharge" });
    },
    ajax() {
      return new Promise(function(resolve, reject) {
        resolve(
          axios.get("api" + "?t=" + timer).then(function(res) {
            console.log(res.data.msg);
            return res;
          })
        );
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.radius {
  width: 90%;
  border-radius: 8px;
}
.row {
  display: flex;
  background-color: white;
}
.col-1 {
  flex: 1;
  padding: 10px;
}
.margin_40px {
  margin-bottom: 40px;
}
.container {
  width: 100%;
  height: 100%;
  display: block;
}
.demo-carousel {
  background-color: red;
  height: 200px;
}
.bar-index-quick-nav {
  display: flex;
  padding: 15px;
  background-color: #fff;
}
.col {
  flex: 1;
}
.img-box {
  padding: 0 10px;
  background: none;
  height: 30px;
}

img {
  width: 100%;
  box-shadow: 5px 5px 2px #fff;
}
</style>

