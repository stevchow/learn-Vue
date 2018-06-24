import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = '#BADA55';
  }
})

Vue.directive('highlightInput', {
  componentUpdated(el, binding, vnode) {
    let delayTime = 0;
    if (binding.modifiers['delayed']) {
      delayTime = 1000;
    }
    setTimeout(() => {
      if (binding.arg == 'colorText') {
        el.style.color = binding.value;
      } else {
        el.style.backgroundColor = binding.value;
      }
    }, delayTime);
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})