<template>
  <div>
    <header>
      <span class="col-0">图标</span>
      <span class="col-1">安心套餐</span>
    </header>
    <div>
      <ul>
        <li v-for="item in list" :key="item">
          <div class="row" @click="getInfo();">
            <div class="col-1">图片</div>
            <div class="col-1"> 
              <div>
                  文本
              </div>
              <div>
                 文本
              </div>

            </div>
            
          </div>
         
        </li>
      </ul>
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

