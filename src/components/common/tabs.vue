<template>
  <footer>
          <div class="col">

              <router-link :to="{ path: '/index'}"  slot="header"><Icon type="home" size="20"></Icon><div style="margin-top: -5px;
    font-size: 12px;">首页</div></router-link>
            </div>
           
            <div class="col">
              
              <router-link :to="{ path: '/home'}"  slot="header"><Icon type="person" size="20"></Icon><div style="margin-top: -5px;
    font-size: 12px;">我的</div></router-link>
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
  background-color: #fff;
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

