import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import App from './AppDirective.vue'
// import App from './AppFilterMixins.vue'
// import App from './AppAnimation.vue'
// import App from './AppQuiz.vue'
import {routes} from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = '#BADA55';
  }
})

Vue.filter('to-uppercase', (val) => {
  return val.toUpperCase();
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
  router,
  render: h => h(App)
})
