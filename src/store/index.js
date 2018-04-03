import 	Vue from 'vue'
import  Vuex from 'vuex' 
import axios from 'axios';

Vue.use(Vuex)

const state = {
  "appid":"wxe3f3353093e3438e",
  "secret":"8f5644aed6cb0016d3d3cb0f82c862c9"
	
}

const mutations = {

}

const actions = {
  promise(){
    let promise  = new Promise(function(resolve,reject){
      resolve(axios.get("http://hope.s1.natapp.cc/wx/createVueMenu").then(function(res){
        console.log(res);
        return res
      }))
    })
  },
  generator(){

  },
  async(){

  }
}

export default new Vuex.Store({
	state,
  mutations,
  actions
})