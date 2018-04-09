<template>
  <div>
      <div class="map-select-address heightAddressList">
        <div class="address-form">
          <div class="form-block" onclick="selectAddressFun('#map_address_div_main')">
              <div class="item">
                  <h4 id="addressLibName">请选择配送楼宇</h4>
                  <p id="addressLibsss"></p>
              </div>
          </div>
          <input type="hidden" name="addressLibId" id="addressLibId" value="">
          <div class="form-block">
              <input type="text" name="address" id="address" placeholder="地址" value="">
          </div>
          <div class="form-block">
              <input type="text" name="userName" id="userName" placeholder="联系人" value="">
          </div>
          <div class="form-block">
              <input type="tel" name="phone" id="phone" placeholder="联系电话" value="">
          </div>
          <div class="btn-block">
              <button type="button">添加地址</button>
          </div>
      </div>
    </div>
     <Tabs></Tabs>
      <div class="popup-mask hide">
        <div class="popup">
          <h3>选择楼宇</h3>
          <div>
            <div>
              <input type="text" placeholder="请输入楼宇名称，例如：世茂大厦">
            </div>
            <button></button>
          </div>
          <div>
             <Maps></Maps>
          </div>
        </div>
      </div>
       
  </div>
  
</template>
<script>
  export default{
    name:'',
    data(){
      return{

      }
    },
    components:{
      'Tabs': () => import('@/components/common/tabs.vue'),
      'Maps': () => import('@/components/common/map.vue'),
    }
  }
  
</script>
<style scoped>
.map-select-address .address-form {
  text-align: left;
    overflow-x: hidden;
    overflow-y: scroll;
}
.map-select-address .address-form .form-block {
    background-color: #fff;
    border-bottom: 1px solid #eee;
    padding: 10px 20px;
}
.map-select-address .address-form .form-block .item h4 {
    margin: 0;
    font-size: 14px;
    color: #333;
}
.map-select-address .address-form .form-block .item p {
    margin: 0;
    font-size: 12px;
    margin-top: 0;
    color: #666;
}
.map-select-address .address-form .form-block input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
}
.map-select-address .address-form .btn-block {
    padding: 20px;
}
.map-select-address .address-form .btn-block button {
    background-color: #f05c6d;
    border-radius: 2px;
    border: none;
    width: 100%;
    height: 40px;
    font-size: 14px;
    outline: none;
    -webkit-appearance: button;
    cursor: pointer;
    text-transform: none;
    overflow: visible;
    color: #fff;
}
.popup-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.5);
}
.popup{
  margin: 20px 20px 20px 20px ;
   background-color: #fff;
    width: 90%;
    height: 90%;
    border-radius: 4px;
    position: relative;
        z-index: 15;
}


</style>

