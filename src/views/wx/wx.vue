<template>
  <div class="hello">
    <!-- <h1>地址参数：{{ this.$route.query.code }}</h1> -->
    <h1>{{ msg }}</h1>
    <div class="btn">
      <a href="javascript:;" @click="Oauth2()">微信授权</a>
    </div>
    <div class="btn">
      <a href="javascript:;" @click="fetchUserInfo()">取得用户信息</a>
    </div>
    <span v-if="this.$route.query.code">{{`授权code： ${this.$route.query.code}`}}</span>
    <h2 v-if="showInfo">{{`用户名称：${nickname}`}}</h2>
    <h2 v-if="showInfo">{{`用户性别：${sex===1?'男':'女'}`}}</h2>
    <img :src="headimgurl" v-show="showInfo">
    <span v-if="showErr">{{`取得用户信息失败`}}</span>
  </div>
</template>
<!--"appid":"wxe3f3353093e3438e",
  "secret":"8f5644aed6cb0016d3d3cb0f82c862c9"-->
<script>

import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Oauth2.0',
      showErr:false,
      showInfo:false,
      sex:'',
      nickname:'',
      province:'',
      city:'',
      country:'',
      headimgurl:'',
    }
  },
  mounted() {
    if (this.$route.query.code) {
      this.fetchUserInfo();
    }
  },
  methods:{
    Oauth2() {
      var appid = 'wxe3f3353093e3438e';
      var scope = 'snsapi_userinfo';
      var redirect_uri = encodeURI('http://kxy5mw.natappfree.cc/test');
      var oauth2_url = `http://hope.s1.natapp.cc/wx/getWXCode?appid=${appid}&scope=${scope}&state=Hope&redirect_uri=${redirect_uri}`;
      window.location.href = oauth2_url;
    },
    fetchUserInfo() {
      // alert('Get userInfo');
      var code = this.$route.query.code;
      axios.get('/wx/oauth2Code_callback',{
        params:{
          code:code
        }
      }).then((res) => {
        if (res.data.status === 200) {
          this.showInfo = true;
          this.nickname = res.data.result.nickname;
          this.sex = res.data.result.sex;
          this.province = res.data.result.province;
          this.city = res.data.result.city;
          this.country = res.data.result.country;
          this.headimgurl = res.data.result.headimgurl
        } else {
          this.showErr = true;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
btn {
  height: 38px;
  line-height: 38px;
  border: 2px solid #009de6;
  background: #009de6;
  color: #fff;
  font-size: 18px;
  text-align: center;
  border-width: 1px;
}
</style>
