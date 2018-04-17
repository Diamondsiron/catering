<template>
  <div>
    <div class="adr-box">
        <div class="form-list">
            <input type="text" id="nickName" name="nickName" placeholder="请输入姓名" value="Crazy银">
        </div>
        <button class="btm-w80 button-click" >修改姓名</button> 
    </div>
    <Tabs></Tabs>
    
  </div>
  
</template>
<script>
export default {
  components: {
    Tabs: () => import("@/components/common/tabs.vue")
  }
};
</script>
<style scoped>
.adr-box {
  margin: 10px 0 0;
  border-top: 1px solid #e6e6e6;
}
.form-list {
  height: 40px;
  line-height: 40px;
  background: #fff;
  padding: 0 20px;

  text-align: left;
}
.form-list input {
  font-size: 14px;
  border: none;
  padding: 0;
  width: 100%;
  outline: none;
}
.form-list:after {
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.btm-w80 {
  width: 80%;

  display: block;
  margin: 15px auto 0;
  border-radius: 5px;
  height: 42px;
  line-height: 42px;
  color: #fff;
  font-size: 14px;
  background: #f05c6d;
  border: none;
  padding: 0 15px;
  outline: 0 none;
  vertical-align: middle;
}
</style>

