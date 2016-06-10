import Vue from 'vue'
import Store from './store'
import App from './App.vue'
import Helpers from './helpers'

Vue.use(require('vue-resource'))

Vue.filter('trim', {
  write: val => val.trim()
})

/* eslint-disable no-new */
pvoxGlobal.vm = new Vue({
  el: 'body',
  
  data: Store,
  
  components: { App },

  methods: {
    updateMessageText: function(text)
    {
      this.userData.message = text
    }
  },
  
  ready: function()
  {
  	let widget_id = Helpers.getQueryParam('widget_id')
  	
  	if (widget_id !== null)
  	{
  		this.widgetData.widget_id = widget_id

  		this.$http.get('/widgets/write-lawmaker-data/' + widget_id).then(
  			response => {
          Helpers.mapWidgetStatusToStore(response.data)

          if (this.active && this.onAllowedUrl)
          {
            Helpers.mapWidgetDataToStore(response.data)
            this.userData.message = this.widgetData.customLetter
            this.currentView = this.allViews[this.currentIndex]
          }
          else
          {
            this.currentView = 'Errors'
          }
  				
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

pvoxGlobal.vm.$watch('currentIndex', (newVal) => {
	Store.currentView = Store.allViews[newVal]
})

pvoxGlobal.vm.$watch('userData.state', (newVal) => {
  if (Store.widgetData.restrictedToState)
  {
    if (Store.userData.state !== Store.widgetData.restrictedToState)
    {
      alert('Only users that live in ' + Store.widgetData.restrictedToState + ' are allowed to weigh in on this bill.')
      window.location.reload()
    }
  }
})
