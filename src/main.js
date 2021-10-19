import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'windi.css'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
