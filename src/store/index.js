import 	Vue from 'vue'
import  Vuex from 'vuex' 
import axios from 'axios';

Vue.use(Vuex)

const state = {
	
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