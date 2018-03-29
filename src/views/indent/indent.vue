<template>
 <div>
    <div class="bar-data">
      <a href="javascript:" class="pull-left nav-lr">前一天</a>
       <a href="javascript:" class="pull-right nav-lr">后一天</a>
       <div class="title">
         <Row>
            <Col span="12">
                <DatePicker type="date" :value="value1" placeholder="选择日期" format="yyyy年MM月dd日" show-week-numbers style="width: 200px"></DatePicker>
            </Col>
           
        </Row>
       </div>
    </div>
    <div class="context">
      <div class="col-left">
        <ul>
          <li>
            类别1
          </li>
          <li>
            类别2
          </li>
          <li>
            类别3
          </li>
          <li>
            类别4
          </li>
        </ul>

      </div>
      <div class="col-right">
         <ul>
          <li @click="showMeal()">
            <img src="static/1.jpg" alt="">
            <div>描述</div>
          </li>
          <li @click="showMeal()">
            <img src="static/1.jpg" alt="">
            <div>描述</div>
          </li>
          <li @click="showMeal()">
            <img src="static/1.jpg" alt="">
            <div>描述</div>
          </li>
          <li @click="showMeal()">
            <img src="static/1.jpg" alt="">
            <div>描述</div>
          </li>
        </ul>

      </div>
    </div>
    <ShopCart></ShopCart>
  </div>
</template>
<script>
export default{
  name:'indent',
  data(){
    return{
      value1:'2018-03-28'
    }
  },
  components:{
    'ShopCart': () => import('@/components/common/shopcart.vue'),
  },
  methods:{
    showMeal(){
      this.$router.push("/meal")
    }
  },
  mounted(){
    
  }

  
}
  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  width: 100%;
  height: 30px;
}
.bar-data .nav-lr {
    height: 38px;
    padding: 0 10px;
    text-align: center;
    font-size: 12px;
}
.bar-data a {
    display: inline-block;
    font-size: 14px;
    z-index: 20;
    line-height: 38px;
    color: #666;
}
.pull-right {
    float: right;
}
.pull-left {
    float: left;
}
.bar-data .title {
    font-size: 12px;
    display: inline-block;
    padding: 3px 10px;
    background-color: #e3e3e3;
    border-radius: 2px;
    margin-top: 7px;
}
.context{
  display: flex;
  
}
.col-left {
   flex: 0 0 80px;
   width: 80px;
}
.col-right {
   flex:1;
}
.col-right>ul{
  padding: 0px 15px 15px 0px;
}
.col-right>ul>li>img{
  width:100%;
}
li{
  list-style: none
}

</style>