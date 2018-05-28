import Vue from 'vue'
import App from './App.vue'
import Nationality from './Hero.vue'

Vue.component('nationality-flag', Nationality)

new Vue({
  el: '#app',
  render: abcdefg => abcdefg(App)
})
