// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/index.js'
import {routers} from './router/router.js'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'





Vue.config.productionTip = false
Vue.use(iView);
Vue.use(MuseUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store,
  components: { App },
  template: '<App/>'
})
