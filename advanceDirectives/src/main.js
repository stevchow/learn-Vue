import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = '#BADA55';
  }
})

Vue.directive('highlightInput', {
  componentUpdated(el, binding, vnode) {
    if (binding.arg == 'colorText') {
      el.style.color = binding.value;
    }else{
      el.style.backgroundColor = binding.value;
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
