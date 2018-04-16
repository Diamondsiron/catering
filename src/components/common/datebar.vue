<template>
 <div class="m-date-bar">
   <div class="m-date-bar-box">
    <div class="u-day cursor" date="2018-04-02"  v-bind:class="{ 'on': isActive== index  }" v-for="(item,index) in list" :key="item.index" @click="check(index )">
	            <h4>{{item.date}}</h4>
	            <p>{{item.day}}
               
              </p>
	  </div>
   


   </div>
    <div class="w300">
        <div class="row">
          <div class="col-0-80"><button class="btn" @click="changetime('0')" v-bind:class="{red:time=='0'}">午餐</button></div>
          <div class="col-1"> 
              <button class="cut "  @click="cutlunch" ></button>
              <input class="num" v-model="lunch">
               <button class="add "  @click="addlunch" ></button>
          </div>
          <div  class="col-1"></div>
        </div>
        <div class="row">
           <div class="col-0-80"><button class="btn" @click="changetime('1')" v-bind:class="{red:time=='1'}">晚餐</button></div>
          <div  class="col-1">
               <button class="cut " @click="cutsupper"></button>
              <input class="num" v-model="supper">
               <button class="add "  @click="addsupper"></button>
          </div>
          <div  class="col-1"></div>
        </div>
       <div class="row">
           <div class="col-0-80"><button class="btn" @click="changecombo('0')" v-bind:class="{red:combo=='0'}">单日</button></div>
          <div  class="col-1"><button class="btn" @click="changecombo('1')" v-bind:class="{red:combo=='1'}">3日</button></div>
          <div  class="col-1"><button class="btn" @click="changecombo('2')" v-bind:class="{red:combo=='2'}">7日</button></div>

        </div>
      </div>
   
 </div>
</template>
<script>
export default{
  name:'datebar',
  data(){
    return{
      isActive:30,
       lunch:0,
        supper:0,
        time:5,
        combo:3,


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
      if(date.getDay()==0){
          obj.day ='周日'
       }else if(date.getDay()==1){
         obj.day ='周一'
       }
       else if(date.getDay()==2){
         obj.day ='周二'
       }
       else if(date.getDay()==3){
         obj.day ='周三'
       }
       else if(date.getDay()==4){
         obj.day ='周四'
       }
       else if(date.getDay()==5){
         obj.day ='周五'
       }
       else if(date.getDay()==6){
         obj.day ='周六'
       }
      a.push(obj);
      for(let i=0; i<29;i++){
        date.setDate(date.getDate() + 1)
        let obj={
        date:'',
        day:''
      
       }
       obj.date = date.getDate();
       if(date.getDay()==0){
          obj.day ='周日'
       }else if(date.getDay()==1){
         obj.day ='周一'
       }
       else if(date.getDay()==2){
         obj.day ='周二'
       }
       else if(date.getDay()==3){
         obj.day ='周三'
       }
       else if(date.getDay()==4){
         obj.day ='周四'
       }
       else if(date.getDay()==5){
         obj.day ='周五'
       }
       else if(date.getDay()==6){
         obj.day ='周六'
       }
      
        a.push(obj)
      }
      
      return a
    }
  },
  methods:{
    check(value){
      console.log(value);
      if(this.isActive==value){
        this.isActive=-1
      }else{
        this.isActive=value;
      }
      
    },
    changetime(value){
      if(this.time!=value){
        this.time = value
      }else{
        this.time = 2
      }
    },
    changecombo(value){
      if(this.combo!=value){
        this.combo = value
      }else{
        this.combo = 3
      }
    },
    cutlunch(){
      if(this.lunch>0){
        this.lunch--
      }else{
        return
      }
    },
    addlunch(){
      this.lunch++
    },
    cutsupper(){
       if(this.supper>0){
        this.supper--
      }else{
        return
      }

    },
    addsupper(){
      this.supper++
    }

  }
}
  
</script>
<style scoped>
.row{
  display: flex;
}
.col-1{
  flex:1
}
.col-0-80{
  flex:0 0 80px;
}
.w300{
  width: 300px;
}
.cursor{
  cursor:pointer
}
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
.cut {
    background: url(../../../static/cut.png) no-repeat center center;
    background-size: 20px 20px;
     width: 20px;
     height: 20px;
    outline: none;
}
button {
    padding: 0;
    font-size: 12px;
    border: none;
    display: inline-block;
     outline: none;
}
.num {
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
}
.add {
   width: 20px;
    background: url(../../../static/add.png) no-repeat center center;
    background-size: 20px 20px;
     height: 20px;
         outline: none;
}
.btn{
    width: 60px;
    background-color: #1aa1b9;
    border-radius: 10px;
    outline: none;
}
.btn:active {
     background-color: #aed49b;
}
.red{
  background-color: rgb(0, 204, 255)
}
</style>


