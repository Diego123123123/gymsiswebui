import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)
axios.defaults.baseURL = 'https://localhost:44303'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("accessToken") || null
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    }
  },
  actions: {
      login(context, credentials) {
          return new Promise((resolve, reject) => {
              axios.post('/login', credentials).then(
                  response => {
                      const token = response.data.token;
                      localStorage.setItem("accesstoken", token);
                      context.commit("retrieveToken", token)
                      resolve(response)
                  }
              ).catch(
                  error => {
                      console.log(error)
                      reject(error)
                  }
              )
          })
      },
    retrieveToken(context, credentials){
      return new Promise((resolve, reject) => {
        axios.post('/create', credentials).then(
          response => {
            const token = response.data.token;
            localStorage.setItem("accesstoken", token);
            context.commit("retrieveToken", token)
            resolve(response)
          }
        ).catch(
          error => {
            console.log(error)
            reject(error)
          }
        )
      })
    }
  }
})
