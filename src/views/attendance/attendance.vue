<template>
  <div>
    <div class="sign-header">
    <div class="sign-info" @click="buy();">
        <span>签到规则</span>
    </div>
    <div class="sign-dot"   @click="gogo();">
        <span>我的积分10</span>
    </div>
    <div class="sign-box">
        <div class="box">
            
            
          
            <div class="sign">
                <h4>已签到</h4>
            </div>
            
        </div>
    </div>
    <div class="sign-box-info">
        您已经连续签到 <span class="f-red">1</span> 天
    </div>
    <div class="date-box">
        <div class="date-box-header">
            <div class="date">连续签到积分更多</div>
            
        </div>
        <div class="day-list">
                
                <div class="day-box on ">
                    <div class="day">10
                        
                      <img class="on" src="../../../static/sign/date-box-icon-day-on.png">
                    </div>
                    <p class="label">
                      第一天
                    </p>
                  
                </div>
                
                <div class="day-box  ">
                    <div class="day">15
                        
                    </div>
                    <p class="label">
                      
                      第二天
                    </p>
                  
                </div>
                
                <div class="day-box  ">
                    <div class="day">30
                        
                    </div>
                    <p class="label">
                      第三天
                    </p>
                  
                </div>
                
                <div class="day-box  ">
                    <div class="day">55
                        
                    </div>
                    <p class="label">
                      第四天
                    </p>
                  
                </div>
                
                <div class="day-box  ">
                    <div class="day">80
                        
                    </div>
                    <p class="label">
                      第五天
                    </p>
                  
                </div>
                
                <div class="day-box  ">
                    <div class="day">120
                        
                    </div>
                    <p class="label">
                      第六天
                    </p>
                  
                </div>
                
                <div class="day-box  ">
                    <div class="day">150
                        
                    </div>
                    <p class="label">
                      第七天
                    </p>
                  
                </div>
                
                
            </div>
        </div>
    </div>
    <div class="block-colour">
    <div class="block-colour-header">
        <div onclick="requestGet('promptDiv','/mobile/center/sign/exchange_rules.html')" class="title">积分兑换 </div>
        <div class="info">当前积分：<span class="f-red">10</span></div>
    </div>
    <div class="gift-list">
        
        <div class="gift-list-item">
            <img class="header-icon" src="http://img.yotafood.com/static/img/20180209/1518173549803.jpg">
            <h4>美味兑换券（1餐）</h4>
            <p class="tariff">3000积分</p>
            
            
             <div class="btn on">积分<br>不足</div>
            
        </div>
        
        <div class="gift-list-item">
            <img class="header-icon" src="http://img.yotafood.com/static/img/20180301/1519869366160.png">
            <h4>通用10元优惠券</h4>
            <p class="tariff">900积分</p>
            
            
             <div class="btn on">积分<br>不足</div>
            
        </div>
        
        <div class="gift-list-item">
            <img class="header-icon" src="http://img.yotafood.com/static/img/20180301/1519869291926.png">
            <h4>通用5元优惠券</h4>
            <p class="tariff">450积分</p>
            
            
             <div class="btn on">积分<br>不足</div>
            
        </div>
        
        
    </div>
</div>
      <div class="popup-mask hide"   v-bind:class="{show:show, hidden:!show}"></div>
      <div class="popup-meal-shop hide" v-bind:class="{show:show, hidden:!show}">
        <div @click="buy();">
         <img  class="close-btn width_16" src="http://weixin.yotafood.com/mobile/asset/css/imgs/sign/close.png" >
        </div>
         <div class="box">
            <div class="title"><span>签到规则</span></div>

            <h4>一、参与方法</h4>
            <p>1. 签到活动在移动端与微信公众号订餐平台视为同一活动：用户可在“我的”（右上角）签到或首页签到活动入口进入页面完成签到；</p>
            <p>2. 每位用户每天仅限签到1次；</p>
            <p>3. 若签到中断，连续签到记录将清零，奖励从第1天重新计算。</p>

            <h4>二、奖励规则</h4>
            <p>1. 用户每日签到所获奖励将于24小时内到达账户中，具体签到奖励如下：</p>
            <p>开始签到第1天，送10积分；</p>
            <p>连续签到第2天，送15积分；</p>
            <p>连续签到第3天，送30积分；</p>
            <p>连续签到第4天，送55积分；</p>
            <p>连续签到第5天，送80积分；</p>
            <p>连续签到第6天，送120积分；</p>
            <p>连续签到第7天，送150积分；</p>
            <p>2. 签到所获得积分可从页面“我的积分”或“我的-积分”中查询；</p>
            <p>3. 积分可用于兑换相应优惠券，详情可在本签到活动了解。 </p>
            
        

            <h4>三、积分有效期说明</h4>
            <p>用户通过YOTA平台各类活动所获得的积分，将在积分获得后1年内有效，超过1年将自动清除。举例：小YO在2018年1月15日通过签到活动获得30积分，此30积分将在2019年1月14日作废。特此说明。</p>

            <p>【帮助提示】</p>
            <p>如您有疑问需要帮助或对签到活动有任何建议，欢迎您通过APP在线客服以及400-888-9417客户服务专线与我们联系。咨询回复时间周一至周日，9:00--19:00（春节等法定节假日除外）。</p>

            <p>*YOTA可在法律法规允许范围内对本次活动规则进行解释</p>
        </div>

      </div>
  </div>
  
</template>
<script>
export default {
  name: "",
  data() {
    return {
      show: false
    };
  },
  methods: {
    buy() {
      this.show = !this.show;
    },
    gogo() {
      this.$router.push({ name: "attendancelist" });
    }
  }
};
</script>
<style scoped>
.sign-header {
  background: url(../../../static/sign/sign-header-bg.jpg) no-repeat top center;
  background-size: 100%;
  padding-top: 280px;
  position: relative;
  margin-bottom: 15px;
}
.sign-header .sign-info {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 12px;
  color: #333;
  padding-left: 21px;
  background: url(../../../static/sign/sign-header-icon-info.png) no-repeat
    center left;
  background-size: 16px;
}
.sign-header .sign-dot {
  position: absolute;
  top: 18px;
  right: 20px;
  text-align: right;
  padding: 0 23px 0 10px;
  height: 22px;
  line-height: 22px;
  border-radius: 11px;
  color: #333;
  font-size: 12px;
  background: url(../../../static/sign/sign-header-icon-dot.png) no-repeat
    center right;
  background-size: 21px 16px;
  background-color: #50e3c2;
}
.width_16 {
  width: 16px;
  float: right;
}
.sign-header .sign-box {
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  position: absolute;
  top: 60px;
  left: 50%;
  margin-left: -60px;
  text-align: center;
}
.sign-header .sign-box-info {
  text-align: center;
  position: absolute;
  top: 190px;
  left: 0;
  right: 0;
  font-size: 14px;
}
.sign-header .sign-box .box {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 90px;
  height: 90px;
  background-color: #fbf4c7;
  border: 5px solid #fff;
  border-radius: 50px;
}
.sign-header .sign-box .box .sign {
  line-height: 90px;
  margin: 0;
}
.sign-header .date-box {
  margin: -55px 20px 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}
.sign-header .date-box .date-box-header {
  padding: 10px 20px;
}
.sign-header .date-box .date-box-header .date {
  display: inline-block;
  font-size: 14px;
  padding-left: 25px;
  background: url(../../../static/sign/date-box-icon-date.png) no-repeat center
    left;
  background-size: 18px;
}
.sign-header .date-box .day-list {
  display: flex;
  flex-direction: row;
  padding: 0 10px 10px;
}
.sign-header .date-box .day-list .day-box {
  flex: 1;
  text-align: center;
}
.sign-header .date-box .day-list .day-box.on .day {
  border: 1px solid #50e3c2;
  background-color: #50e3c2;
}
.sign-header .date-box .day-list .day-box .day {
  display: inline-block;
  border: 1px solid #e6e6e6;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  line-height: 34px;
  font-size: 16px;
  color: #333;
  text-align: center;
  position: relative;
}
.sign-header .date-box .day-list .day-box p.label {
  margin: 5px 0 0;
  font-size: 11px;
  color: #666;
}
.show {
  display: block;
}
.hidden {
  display: none;
}
.popup-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
.popup-meal-shop {
  z-index: 11;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
}
.sign-header .date-box .day-list .day-box .day .on {
  width: 15px;
  height: 15px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.block-colour {
  background-color: #fff;
  padding: 20px;
  margin: 10px 0;
}
.block-colour .block-colour-header {
  font-size: 16px;
  color: #333;
  text-align: left;
}
.block-colour .block-colour-header .title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  border-left: 3px solid #f26c4f;
  padding-left: 5px;
  line-height: 1;
  display: inline-block;
}
.block-colour .block-colour-header .info {
  float: right;
  color: #999;
  font-size: 12px;
  margin-top: 2px;
}
.block-colour .gift-list {
  margin-top: 15px;
}
.block-colour .gift-list .gift-list-item {
  background: #fff;
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  margin: 10px 0 0;
  padding: 15px 75px 45px 120px;
  position: relative;
  border: 1px solid #f1f1f1;
}
.block-colour .gift-list .gift-list-item .header-icon {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 90px;
}
.block-colour .gift-list .gift-list-item h4 {
  margin: 0;
}
.block-colour .gift-list .gift-list-item .tariff {
  position: absolute;
  margin: 0;
  left: 120px;
  right: 75px;
  bottom: 15px;
  font-size: 14px;
  line-height: 1;
  color: #f26c4f;
}
.block-colour .gift-list .gift-list-item .btn.on {
  background-color: #d8d8d8;
  background-image: none;
}
.block-colour .gift-list .gift-list-item .btn {
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 15px;
  right: 15px;
  background-image: linear-gradient(-90deg, #ffe347 0%, #f7ef40 100%);
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
  padding-top: 9px;
}

.popup-meal-shop .box {
  text-align: left;
  font-size: 14px;
  max-height: 400px;
  overflow-y: scroll;
}
.popup-meal-shop .box .title {
  text-align: center;
  display: block;
  height: 14px;
  margin-bottom: 20px;
}
.popup-meal-shop .box h4 {
  margin: 10px 0;
  font-size: 14px;
}
</style>

