<template>
  <div>
    <headers>
      
    </headers>
    <div>
      <ul >
        <li v-for="item in list" :key="item">
          <div class="interval">

          </div>
          <div class="row" @click="getInfo();">
            <div class="col-1">
              <img src="http://img.yotafood.com/static/img/20180208/1518067448375.jpg">
            </div>
            <div class="col-1"> 
              <div class="name" >
                  高蛋白主菜盒
              </div>
              <div class="content">
                 澳洲谷饲牛肉片 / 雷笋炒肉丝 / 三鲜卷LB / 
              </div>

            </div>
            
          </div>
         
        </li>
      </ul>
    </div>
    <div style="margin-bottom:40px"></div>
   <ShopCart></ShopCart>
  </div>
</template>
<script>
export default{
  data(){
    return{
      list:[1,2,3,4]
    }
  },
  components:{
    'ShopCart': () => import('@/components/common/shopcart.vue'),
    'headers': () => import('@/components/common/headers.vue'),
  },
  methods:{
    getInfo(){
      this.$router.push({name:'mealdetail'})
    }
  }
  

}
  
</script>
<style scoped>
.name{
  margin: 0 0 5px;line-height: 1;font-weight: normal;text-align: left;color: #333;
}
.content{
  font-size: 12px;margin: 7px 0 0;line-height: 1.2;text-align: left;color: #999;
}
ul{
  margin-top: 10px;background-color: #fff;
}
.interval{
border-top: 1px solid #ddd;border-bottom: 1px solid #ddd; width: 100%;height: 15px;
}
header{
  display: flex;
  background: -webkit-linear-gradient(left, #f21111, #e56586);
  height: 40px;
}
.col-0{
  flex:0,0,40px
}
.col-1{
  flex: 1;
  margin: 10px;
  
 
}
li{
  list-style: none;
}
.row{
  display: flex
}
img{
  width: 100%;
}

</style>

