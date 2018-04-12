<template>
	<div>
		<div><span class='value'>{{value}}</span><span id='unit'>cm</span></div>
		<div :id='rulerWrapper' class="rulerWrapper" >
            <img src="static/rulerWrapper-mask-left.png" alt="" class="rulerWrapper-mask-left">
            <img src="static/rulerWrapper-mask-right.png" alt="" class="rulerWrapper-mask-right">
            <div class="rulerScroller"  :id='rulerScroller'>
                <div v-for="item in list" :key="item">
                <span class='sizeNo'>{{item}}</span>
                <ul >
                    <li  v-for="item in lists" :key="item" ></li>
                </ul>
               </div>
            </div>
            <div class="rulerPointer"></div>
        </div>
		
	</div>
  
</template>
<script>
export default{
  props: ['rulerWrapper','rulerScroller'],
  data(){
    return{
    list:[0,10,20,30,40,50,60,70,80,90],
    lists:[1,2,3,4,5,6,7,8,9] ,
    value:30

    }
  },
  methods:{
    init(){
        
     var that = this;
     var st;
     //滚动条实际长度
     var wrapperWidth=document.getElementById(that.rulerScroller).offsetWidth;
     //屏幕宽度
    var maxWidth = document.getElementById(that.rulerWrapper).offsetWidth;
    var leftlimit =  Math.floor((maxWidth)/2+10)
    var scale = Math.floor((maxWidth)/2/10+1)
    // console.log(wrapperWidth,maxWidth,leftlimit);
     document.getElementById(that.rulerScroller).addEventListener("touchstart",function(e){
       
       var touch = e.targetTouches[0];  
        st = touch.pageX;
     })

     document.getElementById(that.rulerScroller).addEventListener("touchmove",function(e){
          
        var touch = e.targetTouches[0];
        var x = touch.pageX;
         var lf=document.getElementById(that.rulerScroller).offsetLeft
         //控制速度的关键 因为挪动距离和value是对应的 修改挪动距离 速度随公式改变
        // var nlf=(lf+x-st)/2;
         var nlf=(lf+x-st)
       //  console.log("nlf",nlf,"lf",lf,"x",x,"st",st)
         
         if(lf-leftlimit>0||-wrapperWidth+maxWidth>lf){
             
                return;
         }else{
             
             document.getElementById(that.rulerScroller).style.left = nlf+"px";
         }
         document.getElementById(that.rulerScroller).style.left = nlf+"px";
          that.value=Math.floor((leftlimit-nlf)/(10))>0?Math.floor((leftlimit-nlf)/(10)):0;
        // console.log(nlf,that.value,leftlimit)
         

         
         

     })

     document.getElementById(that.rulerScroller).addEventListener("touchend",function(e){
          var lf=document.getElementById(that.rulerScroller).offsetLeft
          if(lf>leftlimit){
                document.getElementById(that.rulerScroller).style.left = leftlimit+"px"; 
          }else if(-wrapperWidth+maxWidth>lf){
              document.getElementById(that.rulerScroller).style.left =-wrapperWidth+maxWidth+'px'
               that.value=Math.floor(-(-wrapperWidth+maxWidth)/10+leftlimit/10)
          }
         //var pointerVal=Math.floor((limitLeft-nDis)/(10*param.mult));


     })
    //nlf = leftlimit-10*that.vlue
     document.getElementById(that.rulerScroller).style.left =  leftlimit-10*that.value+'px'
     console.log("初始值", leftlimit-10*that.value+'px')
      console.log("start");
    },

  },
  mounted(){
    this.init();
  }
}
  
</script>
<style>

.rulerWrapper .rulerPointer{
    position: absolute;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 15px solid #ffdd22;
    left: 50%;
   
}

.rulerWrapper{
    background: #fff;
    height: 90px;
    overflow: hidden;
    margin-top: 10px;
    position: relative;

}
.rulerWrapper .rulerScroller{
    margin-top: 25px;
    position: absolute;
    display: -webkit-flex;
    display: -webkit-box;
    display: flex;
    
}

.rulerWrapper .rulerScroller ul{
    margin:0;
    padding:0;
    box-sizing:border-box;
    padding:0;
    width:100px;
    height: 30px;
    float:left;
    border-right: 1px solid #666;
    position: relative;

}
.rulerWrapper .rulerScroller li{
     margin:0;
    padding:0;
    box-sizing:border-box;
    list-style: none;
    width: 10px;
    float: left;
    border-right:1px solid  #666;
    height: 20px;
}

.rulerWrapper .doTime span{
    margin-left:-15px
}

.rulerWrapper .sizeNo{
    position:absolute;
    color:  #333;
    top:35px;
    display: block;
    text-align:center
}
.rulerWrapper-mask-left {
    position: absolute;
    top: 0;
    left: 0;
    height: 90px;
    width: 120px;
    z-index: 100;
}
.rulerWrapper-mask-right {
    position: absolute;
    top: 0;
    right: 0;
    height: 90px;
    width: 120px;
    z-index: 100;
}
</style>

