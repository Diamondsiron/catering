<template>
 <div class="m-date-bar">
   <div class="m-date-bar-box">
    <div class="u-day" date="2018-04-02" style="cursor:pointer" v-bind:class="{ 'on': isActive== index  }" v-for="(item,index) in list" :key="item.index" @click="check(index )">
	            <h4>{{item.date}}</h4>
	            <p>{{item.day}}
               
              </p>
	  </div>
   


   </div>
   
 </div>
</template>
<script>
export default{
  name:'datebar',
  data(){
    return{
      isActive:30

    }
  },
  computed:{
    list:function(){
      let obj={
        date:'',
        day:''
      
      }
      let a = [];
      let date  = new Date();
      obj.date = date.getDate();
      obj.day = date.getDay();
      a.push(obj);
      for(let i=0; i<29;i++){
        date.setDate(date.getDate() + 1)
        let obj={
        date:'',
        day:''
      
       }
       obj.date = date.getDate();
       obj.day = date.getDay();
        a.push(obj)
      }
      
      return a
    }
  },
  methods:{
    check(value){
      console.log(value);
      this.isActive=value;
    }
  }
}
  
</script>
<style scoped>
.m-date-bar {
    padding: 5px 30px;
    background-color: #F4F4F4;
}
.m-date-bar .m-date-bar-box {
    overflow: hidden;
    height: 38px;
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
}
.m-date-bar .m-date-bar-box .u-day {
    color: #999;
    width: 36px;
    height: 36px;
    border-radius: 50px;
    text-align: center;
    display: block;
}
.m-date-bar .m-date-bar-box .u-day h4 {
    line-height: 1;
    margin: 4px 0 0;
    font-size: 16px;
    font-weight: normal;
}
.m-date-bar .m-date-bar-box .u-day p {
    line-height: 1;
    margin: 0;
    font-size: 10px;
}
.m-date-bar .m-date-bar-box .u-day.on {
    background-color: #FFFEA2;
    border: 1px solid #FBE673;
    color: #333;
}
</style>


