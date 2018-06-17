<template>
  <div class="app">
    <h3>Not argument</h3>
    <ol>
      <li>{{ count }}</li>
      <li>{{ max }}</li>
    </ol>
    <h3>Argument</h3>
    <ol>
      <li>{{ itemA }}</li>
      <li>{{ itemB(1) }}</li>
      <li>{{ nameA }}</li>
      <li>{{ nameB(1) }}</li>
    </ol>
    <h3>Message</h3>
    <p>{{ message }}</p>
    <EditForm/>
  </div>
</template>

<script>
import store from './store.js'
import EditForm from './components/EditForm'

export default {
  name: 'App',
  components: {
    EditForm
  },
  created() {
    console.log(this.$store.state.count)
    this.$store.commit('increment')
  },
  computed: {
    count() { return store.getters.count },
    max()   { return store.getters.max },
    itemA() { return store.getters.item(1) },
    itemB() { return store.getters.item },
    nameA() { return store.getters.name(1) },
    nameB() { return store.getters.name },
    message(){ return store.getters.message}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
