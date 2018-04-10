<template>
  <div>
    <div class="jk-q-guide">
      
        <div class="form-block">
           
            <div class="item-img-list">
                <div class="item item1 on" param="fiberbody" value="0">
                    <h4>纤体塑形</h4>
                    <p>优质蛋白×膳食纤维</p>
                    <p>拥有美好肉体的最佳伴侣</p>
                    <img src="http://weixin.yotafood.com/mobile/css/re-imgs/health/item-img-list-1.png" alt="">
                </div>
                <div class="item item2 " param="motherhood" value="1">
                    <h4>孕产营养</h4>
                    <p>与TA一起，给你孕期的细致呵护与照顾</p>
                    <img src="http://weixin.yotafood.com/mobile/css/re-imgs/health/item-img-list-2.png" alt="">
                </div>
                <div class="item item3 " param="healthDiseaseStyle" value="2">
                    <h4>健康疾控</h4>
                    <p>合理膳食，健康搭配，均衡调理您的健康饮食顾问</p>
                    <img src="http://weixin.yotafood.com/mobile/css/re-imgs/health/item-img-list-3.png" alt="">
                </div>
                <div class="item item4 " param="complete" value="3">
                    <h4>享受美味</h4>
                    <p>奢华美味，近千道名菜每餐近30种食材，6-10道菜品</p>
                    <img src="http://weixin.yotafood.com/mobile/css/re-imgs/health/item-img-list-4.png" alt="">
                </div>
            </div>
        </div>
        <div class="form-block-btn">
            <button class="but-yellow" @click="goto();">下一步</button>
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
         goto(){
             this.$router.push({name:'custommadefive'})
        }

    }

  }

</script>
<style scoped>
.jk-q-guide .form-block {
    text-align: center;
    padding: 0;
    margin: 20px 0;
}
.jk-q-guide .form-block .item-img-list .item.item1.on {
    background-color: #EEFCFF;
}
.jk-q-guide .form-block .item-img-list .item {
    padding: 20px;
    border-top: 1px solid #EDEDED;
    border-bottom: 1px solid #EDEDED;
    text-align: left;
    padding-right: 140px;
    position: relative;
    min-height: 75px;
}
.jk-q-guide .form-block .item-img-list .item h4 {
    margin: 5px 0 10px;
    line-height: 1;
}
.jk-q-guide .form-block .item-img-list .item p {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
}
.jk-q-guide .form-block .item-img-list .item img {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 110px;
    height: 75px;
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

