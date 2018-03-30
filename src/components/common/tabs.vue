<template>
  <footer>
          <div class="col">
            
              <router-link :to="{ path: '/index'}"  slot="header">首页</router-link>
            </div>
            <div class="col">
             
              <router-link :to="{ path: '/indent'}"  slot="header">订餐</router-link>
            </div>
            <div class="col">
              
              <router-link :to="{ path: '/appointment'}"  slot="header">预约</router-link>
            </div>
            <div class="col">
              
              <router-link :to="{ path: '/home'}"  slot="header">我的</router-link>
            </div>

    </footer>
  
</template>
<script>
  export default{

  }
</script>
<style scoped>
footer{
 position: fixed;
 display: flex;
  bottom: 0px;
  height: 50px;
 
  width: 100%;
  background-color: yellow;
  justify-content:center;
   align-items:center;
}
.col{
  flex: 1;
 
}
a{
  color: #929292;
}

</style>

