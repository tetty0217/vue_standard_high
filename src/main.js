import Vue from 'vue'
import App from './App'
import store from './store.js'

console.log(store.state.count)

store.commit('increment')

console.log(store.state.count)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

