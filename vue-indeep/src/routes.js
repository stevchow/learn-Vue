import Home from './components/Home.vue'
import Alert from './components/Alert.vue'
import List from './components/List.vue'
import Success from './components/Success.vue'

export const routes = [
  { path: '', component: Home },
  { path: '/alert', component: Alert },
  { path: '/list', component: List },
  { path: '/success', component: Success },
]