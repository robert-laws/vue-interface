import './assets/styles.css'
import './assets/appointments.json'

import Vue from 'vue'
import App from './App.vue'

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})