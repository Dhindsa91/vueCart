import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

//registering a component here will make it available in any component



new Vue({
  render: h => h(App),
}).$mount('#app')
