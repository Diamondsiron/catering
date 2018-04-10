<template>
  <div>
    <div class="jk-q-guide">
       
      
        <div class="form-block">
            <br>
            <h4 class="title-lg">您平时的运动量？</h4> 
            
            <div class="item-list">
                <div class="item on" value="0">
                    <h4>久坐</h4>
                    <p>很少运动，多伏案工作</p>
                </div>
                <div class="item " value="1">
                    <h4>轻微活跃</h4>
                    <p>每周有1～3天有运动</p>
                </div>
                <div class="item " value="2">
                    <h4>中度活跃</h4>
                    <p>每周有3～5天有运动</p>
                </div>
                <div class="item " value="3">
                    <h4>高度活跃</h4>
                    <p>每周有6～7天有运动</p>
                </div>
            </div>

        </div>
        <div class="form-block-btn">
            <button class="but-yellow" onclick="submitFun()">下一步</button>
        </div>
    </div>
  </div>
  
</template>
<script>

  export default{
    name:'',
    data(){

      return{

      }

    },
    methods:{

    }

  }

</script>
<style scoped>
.jk-q-guide .form-block {
    text-align: center;
    padding: 0;
    margin: 20px 0;
}
.jk-q-guide .form-block .title-lg {
    font-size: 24px;
    font-weight: lighter;
    margin: 0 0 30px;
}
.jk-q-guide .form-block .item-list {
    margin-bottom: 40px;
}
.jk-q-guide .form-block .item-list .item.on {
    background: url(../../../static/jk-q-guide-list-icon-on.png) no-repeat 260px 13px;
    background-size: 22px;
    background-color: #DFFFF9;
}
.jk-q-guide .form-block .item-list .item {
    background: #FFF;
    border: 1px solid #3FDABF;
    border-radius: 25px;
    height: 50px;
    width: 298px;
    background: url(../../../static/jk-q-guide-list-icon.png) no-repeat 260px 13px;
    background-size: 22px;
    display: block;
    margin: 0 auto;
}
.jk-q-guide .form-block .item-list .item+.item {
    margin-top: 25px;
}
.jk-q-guide .form-block .item-list .item h4 {
    margin: 0;
    font-size: 16px;
    margin-top: 4px;
    color: #333;
    font-weight: lighter;
}
.jk-q-guide .form-block .item-list .item p {
    margin: 0;
    font-size: 12px;
    color: #999;
    font-weight: lighter;
}
.jk-q-guide .form-block-btn {
    text-align: center;
    margin-top: -10px;
    margin-bottom: 30px;
}
.jk-q-guide .form-block-btn button {
    width: 300px;
    height: 82px;
    display: inline-block;
    padding: 0;
    background: url(../../../static/jk-q-guide-but-yellow.png) no-repeat center;
    background-size: 300px 82px;
    border: none;
    outline: none;
}

</style>

