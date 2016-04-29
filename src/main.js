import Vue from 'vue'
import Store from './store'
import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  data: Store,
  components: { App }
})
