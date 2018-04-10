<template>
  <div>
    <div class="dot-list">
    
      <div class="dot-list-item">
          <h3 class="f-red">可用积分：10分</h3>
      </div>
      <div class="dot-list-item">
          <h3>
             签到积分奖励
          </h3>
          <p class="memo">2018-04-08 13:56:07</p>
          <span class="num f-red">+10分</span>
      </div>
      
  </div>
  </div>
  
</template>
<script>
export default{

}
  
</script>
<style scoped>
.dot-list {
    background-color: #fff;
    text-align: left;
}
.dot-list .dot-list-item:first-child {
    border-top: none;
}
.dot-list .dot-list-item {
    padding: 15px 70px 15px 20px;
    position: relative;
    border-top: 1px solid #EDEDED;
}
.dot-list .dot-list-item h3 {
    margin: 0;
    line-height: 1;
    font-size: 16px;
    font-weight: normal;
}
.f-red {
    color: #f05d46 !important;
}
.dot-list .dot-list-item .memo {
    font-size: 12px;
    color: #999;
    margin: 10px 0 0;
}
.dot-list .dot-list-item .num {
    text-align: right;
    font-size: 16px;
    line-height: 1;
    position: absolute;
    top: 50%;
    margin-top: -8px;
    right: 20px;
}

</style>

