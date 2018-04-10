<template>
  <div>
    <header>
      <span class="col-0">图标</span>
      <span class="col-1">自选套餐</span>
    </header>
    <div style="display:flex">
      <div style="flex:0 0 80px">
        <ul>
          <li class="aside">蛋白质</li>
          <li class="aside">碳水类</li>
          <li class="aside">蔬菜类</li>
          <li class="aside">水果类</li>
          <li class="aside">烫饮类</li>
          <li class="aside">酱料类</li>
          <li class="aside">补剂类</li>
        </ul>
      </div>
      <div style="flex:1">
      <ul>
        <li v-for="item in list" :key="item">
            <div class="row" @click="getInfo();">
              <div class="col-1">图片</div>
              <div class="col-1"> 
                <div>
                    文本
                </div>
                <div>
                 价格
                 <div>+1_</div>
                </div>

              </div>
              
            </div>
          
          </li>
        </ul>
      </div>
    </div>
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
  },
  methods:{
    getInfo(){
      this.$router.push({name:'mealdetail'})
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
li{
  list-style: none;
 
}
.aside{
    background-color: rgb(49, 190, 175);
    border: 1px solid rgb(83, 58, 58);
}
.row{
  display: flex
}

</style>

