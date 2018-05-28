import Vue from 'vue'
import App from './App.vue'
import Hero from './Hero.vue'

Vue.component('Hero', Hero)

new Vue({
  el: '#app',
  render: abcdefg => abcdefg(App)
})
