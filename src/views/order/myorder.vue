<template>
  <div>
    <div>
      <header >
       <h4>我的订单</h4> 
        </header>
      <div>
        <ul>
          <li v-for="item in list" :key="item" class="list-item" @click="getInfo();">
            <div class="list-img-box">
              <img class="list-img" src="http://img.yotafood.com/static/img/20170213/1486983688080.jpg">
               
              <span>
                麻辣鸡店
              </span>
              <span class="state">
               订单已送达
              </span>
              <span class="price">
               招牌麻辣鸡
              </span>
              <span class="num">
               12
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div style="margin-bottom:40px"></div>
    <Tabs></Tabs>
  </div>
</template>
  <script>
export default {
  name: "",
  data() {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  methods: {
    getInfo() {
      this.$router.push({ name: "order" });
    }
  },
  components: {
    Tabs: () => import("@/components/common/tabs.vue")
  }
};
</script>
  <style scoped>
header {
  background-color: #fff;
}
.list-img-box {
  position: relative;
  padding-left: 90px;
  padding-bottom: 28px;
  text-align: left;
}
.list-item {
  margin-top: 20px;
  height: 70px;
}
li {
  list-style: none;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #fff;
}
.list-img {
  width: 80px;
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;
}
.list-img-box p {
  margin: 0;
  line-height: 1;
  font-size: 14px;
}
.price {
  position: absolute;
  bottom: 0;
  left: 90px;
  font-size: 14px;
  color: #f05d46;
}
.num {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 14px;
  color: #999;
  right: 30px;
}
.state {
  position: absolute;
  bottom: 30px;
  right: 0;
  font-size: 14px;
  color: #999;
  right: 30px;
}
</style>
  