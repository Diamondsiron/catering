<template>
  <footer>
          <div class="col-1">
              <p >
                <Icon type="ios-cart" size="20" color="white"></Icon>
                ¥0.00
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
  text-align: left;
  color:#fff
  
}
.col-0{
   height: 60px;
  flex:0 0 90px;
  background-color: yellow;
    color: #333;
}
.col-0>p{
  margin-top: 20px;
  
}

</style>

