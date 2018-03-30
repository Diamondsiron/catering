<template>
<div>
   <mt-datetime-picker
   ref="picker"
  v-model="pickerVisible"
  type="date"
  year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日">
</mt-datetime-picker>
  <div @click="handleClick()">
111
  </div>
  <input type="date">
   <div style="width:100%;height:450px;border:#ccc solid 1px;" id="allmap"></div>
</div>
  
 
</template>
<script>
import { DatetimePicker } from 'mint-ui';
import { Toast } from 'mint-ui';

export default{
  name:'test',
  data(){
    return{
      visible:{},
      value:{},
      pickerVisible:''
    }
  },
  components:{
   
  },
  mounted () {
      this.initMap();
  },
  methods:{
    
    handleClick: function() {
      
       this.$refs.picker.open();
    },
     openPicker() {
        this.$refs.picker.open();
    },
     initMap(){
       var map = new BMap.Map("allmap");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
          mapTypes:[
                  BMAP_NORMAL_MAP,
                  BMAP_HYBRID_MAP
              ]}));	  
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);  
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        alert('您的位置：'+r.point.lng+','+r.point.lat);
        }
        else {
        alert('failed'+this.getStatus());
        }        
        },{enableHighAccuracy: true})

     }
    
 
  }
}
  
</script>
<style scoped>

</style>
