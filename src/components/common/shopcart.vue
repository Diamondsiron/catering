<template>
  <footer>
          <div class="col-1">
              <p>
                购物车0.00
              </p>
            
            </div>
           
            
            <div class="col-0">
              <p>
                 提交订单
              </p>
             
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
  
  background-color: royalblue;
  justify-content:center;
   align-items:center;
}
.col-1{
  
   height: 60px;
  flex: 1;
  background-color: rgb(71, 71, 71);
  color: #fff;
}
.col-1>p{
  margin: 20px;
  
}
.col-0{
   height: 60px;
  flex:0 0 90px;
  background-color: rgb(237, 79, 78);
}
.col-0>p{
  margin-top: 20px;
  
}

</style>

