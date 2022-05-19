import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)
const REST_API = `http://localhost:9999/api`

export default new Vuex.Store({
  state: {
    isLogin : false
  },
  getters: {
  },
  mutations: {
    USER_LOGIN(state) {state.isLogin = true},
  },
  actions: {
    login({ commit }, user) {
      const API_URL = `${REST_API}/login`
      axios({
        url: API_URL,
        method: 'POST',
        data : user
      }).then(res => {
        console.log(res)
        commit('USER_LOGIN')
        sessionStorage.setItem("access-token", res.data["access-token"])
        router.push({name: 'home'})
      })
    },
    join({ commit }, user) {
      const API_URL = `${REST_API}/join`
      axios({
        url: API_URL,
        method: 'POST',
        data: user
      }).then(() => {
        router.push({name: 'login'})
        commit()
      })
    },
  },
  modules: {
  }
})
