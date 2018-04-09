<template>
<div>
  <div class="recharge">
      <div class="recharge-form">
         <div class="tabs col-box" style="display:flex">
            <div class="tab col t-r" >
                <img class="phone" src="static/recharge-check-on.png" phone="18722372579">当前账号
            </div>
            <div class="tab col t-l">
                <img class="phone" src="static/recharge-check.png" phone="">给其他账号充值
            </div>
        </div>
          <div class="input-box">
              <input type="text" id="phone" name="phone" placeholder="请输入手机号码" value="18722372579" readonly="readonly">
          </div>
      </div>
      <div class="recharge-options">
          <div class="count-card">
              <div class="count-card-l"></div>
              <div class="count-card-m">
                  <div class="equation" style="padding-top:30px;">
                      <div class="col-2">
                          <h4 id="payPrice">1000</h4>
                          <p>充值</p>
                      </div>
                      <div class="col-1">
                          <h4>+</h4>
                          <p></p>
                      </div>
                      <div class="col-2">
                          <h4 id="discountPrice">288</h4>
                          <p>返赠</p>
                      </div>
                      <div class="col-1">
                          <h4>=</h4>
                          <p></p>
                      </div>
                      <div class="col-2">
                          <h4 id="price">1288</h4>
                          <p>到账</p>
                      </div>
                  </div>
              </div>
              <div class="count-card-r"></div>
          </div>
          <div class="options">
                
                <div class="row">
                  <div class="col">
                      <div class="option" onlinerechargeid="45" discountprice="888" payprice="2000" price="2888">2000元</div>
                  </div>
                
                
                
                  <div class="col">
                      <div class="option" onlinerechargeid="42" discountprice="88" payprice="88" price="176">88元</div>
                  </div>
                
                
                
                  <div class="col">
                      <div class="option" onlinerechargeid="43" discountprice="58" payprice="500" price="558">500元</div>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col">
                      <div class="option on" onlinerechargeid="44" discountprice="288" payprice="1000" price="1288">1000元</div>
                  </div>
                
                
                
                  <div class="col">
                      <div class="option" onlinerechargeid="46" discountprice="2388" payprice="5000" price="7388">5000元</div>
                  </div>
                
                
                
                  <div class="col">
                      <div class="option" onlinerechargeid="47" discountprice="8888" payprice="10000" price="18888">10000元</div>
                  </div>
                </div>
                
          </div>
      </div>
      <div class="pay-list">
          <div class="pay-list-item">
              <button class="wepay" onclick="payFun()"><img src="static/wepay.png">微信支付</button>
          </div>
      </div>
  </div>
</div>
</template>
<script>
  export default{

  }
</script>
<style scoped>
.recharge .recharge-form {
    height: 110px;
    background-image: linear-gradient(-180deg, #33CFC0 0%, #1EBCC4 100%);
}
.recharge .recharge-form .tabs {
    height: 50px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding-top: 17px;
}
.recharge .recharge-form .tabs .tab {
    height: 24px;
    font-size: 12px;
    line-height: 24px;
    padding: 0 15px;
    color: #fff;
}
.col-box .col {
    -moz-box-flex: 1;
    -webkit-box-flex: 1;
    box-flex: 1;
    width: 100%;
}
.t-r {
    text-align: right !important;
}
.recharge .recharge-form .tabs .tab+.tab {
    border-left: 1px solid rgba(255,255,255,0.5);
}

.t-l {
    text-align: left !important;
}
.recharge .recharge-form .input-box {
    padding-top: 5px;
}
.recharge .recharge-form .input-box input {
    text-align: center;
    color: #fff;
    background: none;
    height: 40px;
    border: 1px solid #21e7c4;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-radius: 20px;
    padding: 0 20px;
    outline: none;
    width: 300px;
    display: block;
    margin: 0 auto;
    font-size: 14px;
}
button, input {
    overflow: visible;
}
.recharge .recharge-options {
    padding: 10px;
}
.recharge .recharge-options .count-card {
    padding: 0 11px;
    height: 90px;
    position: relative;
}
.recharge .recharge-options .count-card .count-card-l {
    height: 90px;
    width: 11px;
        background: url(../../../static/count-card-l.png) no-repeat center;
    background-size: 11px 90px;
    position: absolute;
    top: 0;
    left: 0;
}
.recharge .recharge-options .count-card .count-card-m {
    height: 90px;
    width: 11px;
        background: url(../../../static/count-card-m.png) repeat-x;
    background-size: 11px 90px;
    width: 100%;
}
.recharge .recharge-options .count-card .count-card-r {
    height: 90px;
    width: 11px;
   background: url(../../../static/count-card-r.png) no-repeat center;
    background-size: 11px 90px;
    position: absolute;
    top: 0;
    right: 0;
}
.recharge .recharge-options .options {
    margin-top: 5px;
    margin-right: -2px;
    margin-left: -2px;
}
.recharge .recharge-options .options .col {
    padding: 5px;
}
.recharge .recharge-options .options .option {
    font-size: 14px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #21e7c4;
}
.recharge .pay-list {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 30px;
}
.recharge .pay-list .pay-list-item {
    text-align: center;
}
.recharge .pay-list .pay-list-item button.wepay {
    border: 1px solid #1eb821;
    color: #1eb821;
}
.recharge .pay-list .pay-list-item button {
    background-color: #fff;
    font-size: 16px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 12px 0;
    margin: 0;
    border: none;
    border-radius: 25px;
    width: 300px;
    outline: none;
    line-height: 1;
}
.recharge .pay-list .pay-list-item button img {
    height: 26px;
    width: 26px;
    display: inline-block;
    margin-right: 5px;
    vertical-align: -7px;
}
.row{
  display: flex;
}
.col{
  flex: 1;
}
.recharge .recharge-options .count-card .count-card-m .equation {
    display: -moz-box;
    display: -webkit-box;

}
.recharge .recharge-options .count-card .count-card-m .equation .col-2 {
    -moz-box-flex: 2;
    -webkit-box-flex: 2;
    box-flex: 2;
    text-align: center;
}
.recharge .recharge-options .count-card .count-card-m .equation .col-1 {
    -moz-box-flex: 1;
    -webkit-box-flex: 1;
    box-flex: 1;
    text-align: center;
}
.recharge .recharge-form .tabs .tab img {
    height: 16px;
    width: 16px;
    display: inline-block;
    vertical-align: -3px;
    margin-right: 5px;
}

</style>

