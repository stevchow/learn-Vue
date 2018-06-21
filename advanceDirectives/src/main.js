import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = '#BADA55';
  }
})

Vue.directive('highlightInput', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
