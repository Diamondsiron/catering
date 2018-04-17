<template>
  <div>
    <div class="address-list">
        <div class="address-list-item">
            <h4>123 <span>18388888888</span></h4>
            <p>北京市-&gt;朝阳区-&gt;朝阳区远洋新悦2期  123</p>
            <div class="address-list-item-ft">
                
                  <div class="default on"><i class="fa fa-check-square" aria-hidden="true"></i> 默认地址</div>
                 <div class="btn-box margin_20px" >
                    <div class="btn" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i> 修改</div>
                    <div class="btn" ><i class="fa fa-trash-o" aria-hidden="true"></i> 删除</div>
                </div>
            </div>
        </div>
        <div class="address-list-item-btn">
            <button type="button" @click="insert()">添加配送地址</button>
        </div>
        
    </div>
    <Tabs></Tabs>
  </div>
</template>
  <script>
export default {
  date() {
    return {};
  },
  components: {
    Tabs: () => import("@/components/common/tabs.vue")
  },
  methods: {
    insert() {
      this.$router.push({ name: "insertaddress" });
    }
  }
};
</script>
  <style scoped>
.margin_20px {
  margin-top: -20px;
}
.address-list .address-list-item {
  margin-top: -1px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  position: relative;
  text-align: left;
}
.address-list .address-list-item h4 {
  font-size: 14px;
  margin: 0;
  font-weight: normal;
}
.address-list .address-list-item p {
  font-weight: lighter;
  font-size: 12px;
  margin: 0;
}
.address-list .address-list-item .address-list-item-ft {
  border-top: 1px solid #e6e6e6;
  padding-top: 5px;
  margin-top: 10px;
}
.address-list .address-list-item .address-list-item-ft .default.on {
  color: #09bb07;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.address-list .address-list-item .address-list-item-ft .btn-box {
  font-size: 12px;
  float: right;
  vertical-align: bottom;
}
.address-list .address-list-item .address-list-item-ft .btn-box .btn {
  display: inline-block;
  border: none;
  outline: none;
}
.btn {
  display: inline-block;
  line-height: 1;
  color: #333;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  font-size: 12px;
  padding: 5px 10px;
  font-weight: lighter;
}
.address-list .address-list-item-btn {
  padding: 10px 20px;
}
.address-list .address-list-item-btn button {
  background-color: #f05c6d;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  color: #fff;
  padding: 10px;
  width: 100%;
  -webkit-appearance: button;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
  font: inherit;
  margin: 0;
}
</style>
  