
<template>
  <header>
      <span class="col-0">
       <div  @click="index()">
            <Icon type="home" size="20"></Icon>
        </div>
        </span>
      <span class="col-1 color_white" >安心套餐</span>
    </header>
  
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    index(){
      this.$router.push({name:'index'})
    }
  }

}
</script>

<style scoped>
header{
  display: flex;
  background: -webkit-linear-gradient(left, #f21111, #e56586);
  height: 40px;
}
.col-0{
  flex:0,0,40px
}
.col-1{
  flex: 1;
  margin: 10px;

}
header div{
  margin-top: 10px;
  margin-left: 15px;
  color: #fff;
}
.color_white{
  color:#fff
}
</style>


