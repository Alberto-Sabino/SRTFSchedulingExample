import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Toast from 'vue2-toast'

import 'vue2-toast/lib/toast.css'

Vue.use(Toast);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
