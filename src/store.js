import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    message: 'initial message',
    list: [
      { id: 1, name: 'apple', price: 100 },
      { id: 2, name: 'banana', price: 200 },
      { id: 3, name: 'orange', price: 300 }
    ]
  },
  actions: {
    doUpdate({commit},message){
      commit('setMessage', {message})
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setMessage(state, payload){
      state.message = payload.message
    }
  },
  getters: {
    count(state, getters, rootState, rootGetter){
      return state.count
    },
    max(state){
      return state.list.reduce((a, b) => {
        return a.price > b.price ? a.price : b.price
      }, 0)
    },
    item(state) {
      return id => state.list.find(el => el.id === id)
    },
    name(state, getters) {
      return id => getters.item(id).name
    },
    message(state){ return state.message}
  }
})
export default store
