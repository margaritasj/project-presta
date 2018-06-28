import Vue from 'vue'
import App from './App.vue'

/* import dependencies fontawesone-icons */
/* import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee) 
Vue.component('font-awesome-icon', FontAwesomeIcon) */
/* end fontawesone-icons*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
