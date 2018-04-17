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
    <div class="product">
      <p>
        晚餐38.00元/餐
      </p>
     
      
    </div>
    <div class="bar-foodinfo-tab">
      <div class="col">
        今日餐单
      </div>
      <div class="col">
        新鲜食材
      </div>
       <div class="col">
        健康报告
      </div>

    </div>
    <div class="food-week">
      周一菜谱
    </div>
    <div class="food-comment">
      <div class="food-comment-header">评论 100 条</div>
      <ul class="food-comment-context">
        <li>
          	<img src="http://img.yotafood.com/static/header/2018-03-22/176903.jpg" alt="">
	                <p class="food-comment-context-user">叶芸<span>2018-03-26 16:10</span></p>
	                <p>送餐很及时，菜品味道不错，搭配很合理，包装很好，希望能瘦身成功。</p>
        </li>
         <li>
          	<img src="http://img.yotafood.com/static/header/2018-03-22/176903.jpg" alt="">
	                <p class="food-comment-context-user">叶芸<span>2018-03-26 16:10</span></p>
	                <p>送餐很及时，菜品味道不错，搭配很合理，包装很好，希望能瘦身成功。</p>
        </li>
         <li>
          	<img src="http://img.yotafood.com/static/header/2018-03-22/176903.jpg" alt="">
	                <p class="food-comment-context-user">叶芸<span>2018-03-26 16:10</span></p>
	                <p>送餐很及时，菜品味道不错，搭配很合理，包装很好，希望能瘦身成功。</p>
        </li>
      </ul>

    </div>
    <ShopCart></ShopCart>
  </div>
</template>
<script>
export default {
  name: "indent",
  data() {
    return {
      value1: "2018-03-28"
    };
  },
  components: {
    ShopCart: () => import("@/components/common/shopcart.vue")
  },
  methods: {},
  mounted() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
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
.context {
  display: flex;
}
.col-left {
  flex: 0 0 80px;
  width: 80px;
}
.col-right {
  flex: 1;
}
li {
  list-style: none;
}
.bar-foodinfo-tab {
  display: flex;
}
.col {
  flex: 1;
}
.food-comment-context > li {
  border-bottom: 1px solid #999;
  font-size: 12px;
  padding-left: 40px;
  position: relative;
  padding-bottom: 10px;
  color: #333;
  text-align: left;
}
.food-comment-context > li > img {
  height: 30px;
  width: 30px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
}
.food-comment-context-user {
  margin: 0;
  margin-bottom: 5px;
  color: #666;
}
</style>