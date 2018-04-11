<template>
  <div>
    <headers>
      
    </headers>
    <div style="display:flex">
      <div style="flex:0 0 60px">
        <ul>
          <li class="aside" @click="changeOrder(0)" v-bind:class="{aside_choose:order==0}">蛋白质</li>
          <li class="aside"  @click="changeOrder(1)" v-bind:class="{aside_choose:order==1}">碳水类</li>
          <li class="aside"  @click="changeOrder(2)" v-bind:class="{aside_choose:order==2}">蔬菜类</li>
          <li class="aside"  @click="changeOrder(3)" v-bind:class="{aside_choose:order==3}">水果类</li>
          <li class="aside"  @click="changeOrder(4)" v-bind:class="{aside_choose:order==4}">烫饮类</li>
          <li class="aside"  @click="changeOrder(5)" v-bind:class="{aside_choose:order==5}">酱料类</li>
          <li class="aside"  @click="changeOrder(6)" v-bind:class="{aside_choose:order==6}">补剂类</li>
        </ul>
      </div>
      <div style="flex:1;background-color: #fff;">
      <ul>
        <li v-for="item in list" :key="item">
            <div class="row">
              <div class="col-1" style=" margin: 10px;" @click="getInfo();">
                <img src="http://img.yotafood.com/static/img/20171228/1514451167769.jpg">

              </div>
              <div class="col-1" style=" margin-top:  10px;"> 
                <div>
                   <h4>极致纤体</h4>
                </div>
                <div style="text-align: left;margin-top: 25px;">
                <span style="text-align: left; color: #ED4F4E; position: relative;height: 22px;margin-bottom: 5px;font-size: 14px;">￥38.00</span>
                
                <span class="num-control">
                                    <button class="cut operate "></button>
                                    <input class="num operateInput"  value="0">
                                    <button class="add operate " ></button>
                </span>
                
                </div>

              </div>
              
            </div>
          
          </li>
        </ul>
      </div>
    </div>
    <div style="margin-bottom:40px"></div>
    <ShopCart></ShopCart>
   
  </div>
</template>
<script>
export default{
  data(){
    return{
      list:[1,2,3,4,5,6,7,8],
      order:0,
    }
  },
  components:{
     'headers': () => import('@/components/common/headers.vue'),
    'ShopCart': () => import('@/components/common/shopcart.vue'),
  },
  methods:{
    getInfo(){
      this.$router.push({name:'mealdetail'})
    },
    changeOrder(value){
      this.order = value;
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
 
 
}
li{
  list-style: none;
 
}
.aside{
    background-color: #f2f2f2;
    
}
.aside_choose{
  background-color: #fff;
}
.row{
  display: flex
}
img{
  width: 100%;
}
.num-control {
    position: absolute;
margin-top: 2px;
    right: 5px;
}
.num-control button.cut {
    background: url(../../../static/cut.png) no-repeat center center;
    background-size: 20px 20px;
     outline: none;
}
.num-control button {
    padding: 0;
    height: 20px;
    width: 20px;
    border: none;
    display: inline-block;
     outline: none;
}
.num-control .num {
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
     outline: none;
}
.num-control button.add {
    background: url(../../../static/add.png) no-repeat center center;
    background-size: 20px 20px;
     outline: none;
}
.num-control button {
    padding: 0;
    height: 20px;
    width: 20px;
    border: none;
    display: inline-block;
     outline: none;
}
</style>

