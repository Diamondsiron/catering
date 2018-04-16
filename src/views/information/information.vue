<template>
  <div class="hight_100">
    <div class="user-info">
      <ul>
            <a href="javascript:void(0)" @click="updatename()" ><li><span>Crazy银</span>姓名</li></a>
            <a href="javascript:void(0)" @click="updatetel()"><li><span>18722372579</span>手机号码</li></a>
      </ul>
    </div>
     <Tabs></Tabs>
  </div>
  
</template>
<script>
  export default{
    name:'information',
    components:{
      'Tabs': () => import('@/components/common/tabs.vue'),
    },
    methods:{
      updatename(){
         this.$router.push({name:'updatename'})
      },
      updatetel(){
         this.$router.push({name:'updatetel'})
      }

    }

  }
</script>
<style scoped>
.hight_100{
 height:100;
 background-color: #F2F2F2;
}
    
.user-info {
    background: #fff;
    text-align: left;
    font-size: 14px;
    margin: 10px 0 0;
    border-top: 1px solid #E6E6E6;
}
ul, li, ol {
    margin: 0;
    padding: 0;
    list-style: none outside none;
}
a {
    text-decoration: none;
    color: #484848;
}
.user-info ul {
    line-height: 44px;
}
.user-info li {
    border-bottom: 1px solid #E6E6E6;
    padding: 0 50px 0 20px;
    background: url(../../../static/arrow.png) right 43% no-repeat;
    background-size: 18px 18px;
}
.user-info span {
    float: right;
}

</style>
