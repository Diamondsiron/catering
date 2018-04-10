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
              <input type="text" placeholder="请输入楼宇名称，例如：世茂大厦" v-model="value">
            </div>
            <button></button>
          </div>
          <div>
             <div style="width:100%;height:200px;border:#ccc solid 1px;" id="allmap" ></div>
          </div>
          <ul>
              <li v-for="item in list" :key="item">
                  {{item}}
              </li>
          </ul>
         
        </div>
      </div>
       
  </div>
  
</template>
<script>
  export default{
    name:'',
    data(){
      return{
          value:'',
          list:[],
          checks:''
          
      }
    },
    components:{
      'Tabs': () => import('@/components/common/tabs.vue'),
      'Maps': () => import('@/components/common/map.vue'),
    },
    watch:{
        value(){
            console.log(this.value)
            this.search(this.value)
        }
    },
    methods:{
        init(){
        var map = new BMap.Map("allmap");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
       
         
       map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);  
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
         if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
        // alert('您的位置：'+r.point.lng+','+r.point.lat);
            }
            else {
            //alert('failed'+this.getStatus());
            }        
            },{enableHighAccuracy: true})
            var geoc = new BMap.Geocoder();   
            map.addEventListener("click",function(e){
                //console.log(e.address);
                //alert(e.point.lng + "," + e.point.lat);
                var pt = e.point;
                geoc.getLocation(pt, function(rs){
                    var addComp = rs.addressComponents;
                    alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                });
            });
        
       window.map = map;//将map变量存储在全局

      },
      search(value){
        
          var that = this
          var options = {
            onSearchComplete: function(results){
                // 判断状态是否正确
                if (local.getStatus() == BMAP_STATUS_SUCCESS){
                    var s = [];
                    for (var i = 0; i < results.getCurrentNumPois(); i ++){
                        console.log(results);
                        s.push(results.getPoi(i).city+','+ results.getPoi(i).address + ", " + results.getPoi(i).title);
                    }
                   // if (results.getPageIndex() < results.getNumPages() - 1){
                     //   local.gotoPage(results.getPageIndex() + 1); 
                   // }
                    
                   console.log(s);
                   that.list = s;
                   console.log(that.list)
                }
            }
        };
          var local = new BMap.LocalSearch(map, options);
          local.search(value);
      }
    },
    mounted(){
        this.init();
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

