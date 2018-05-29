import Vue from 'vue'
import App from './App.vue'
import Hero from './components/Hero.vue'
import Footer from './components/footer.vue'

Vue.component('Hero', Hero)
Vue.component('Footer', Footer)

new Vue({
  el: '#app',
  render: abcdefg => abcdefg(App)
})
