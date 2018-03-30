// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
Vue.use(flatPickr);


Vue.config.productionTip = false
Vue.use(iView);
Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
