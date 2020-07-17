import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './components/router/index'
import store from './store/index'


Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
