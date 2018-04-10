<template>
  <div>
    <header>
      <span class="col-0">图标</span>
      <span class="col-1">自选套餐</span>
    </header>
    <div style="display:flex">
      <div style="flex:0 0 80px">
        <ul>
          <li>蛋白质</li>
          <li>碳水类</li>
          <li>蔬菜类</li>
          <li>水果类</li>
          <li>烫饮类</li>
          <li>酱料类</li>
          <li>补剂类</li>
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
    <Tabs></Tabs>
   
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
    'Tabs': () => import('@/components/common/tabs.vue'),
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
.row{
  display: flex
}

</style>

