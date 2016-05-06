import Vue from 'vue'
import Store from './store'
import App from './App.vue'
import Helpers from './helpers'

Vue.use(require('vue-resource'));

/* eslint-disable no-new */
var vm = new Vue({
  el: 'body',
  
  data: Store,
  
  components: { App },
  
  ready: function()
  {
  	jQuery('#pvox-loading').modal('show')

  	let widget_id = Helpers.getQueryParam('widget_id')
  	
  	if (widget_id !== null)
  	{
  		this.widgetData.widget_id = widget_id

  		this.$http.get('/widgets/write-lawmaker-data/' + widget_id).then(
			response => {
				Helpers.mapWidgetDataToStore(response.data)
				this.userData.message = this.widgetData.customLetter
				this.currentView = this.allViews[this.currentIndex]
				
				setTimeout(() => this.loading = false, 1000)
			},
			response => {
				console.log('Could not load widget data')
				this.loading = false
			}
		)
  	}
  }
}) 

vm.$watch('currentIndex', (newVal) => {
	Store.currentView = Store.allViews[newVal]
})
