import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Email: 'email@email.com',
    Username: 'Username',
    UserId: 'x',
    token: null,
    auth:{
      userId : "",
      token : "",
      isAdmin: ""
    },
    headerParams: {
      headers: {
        Authorization: "Bearer " 
      }
    }
  },
  mutations: {
    saveToken(state, [userId, token, isAdmin]) {
      state.auth.userId = userId,
      state.auth.token = token,
      state.auth.isAdmin = isAdmin
    }
  },
  actions: {
  },
  modules: {
  }
})
