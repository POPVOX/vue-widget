import Vue from 'vue'
import Store from './store'
import App from './App.vue'
import Helpers from './helpers'
import VeeValidate from 'vee-validate'


Vue.use(require('vue-resource'))
Vue.use(VeeValidate);

Vue.http.headers.common['X-CSRF-TOKEN'] = pvoxGlobal.csrfToken

pvoxGlobal.vm = new Vue({

    el: '#app',
  
    data: Store,
  
    components: { App },

    methods: {
        updateMessageText: function(text)
        {
            this.userData.message = text
        }
    },
  
    mounted: function()
    {
        let widget_id = Helpers.getQueryParam('widget_id')

        if (widget_id !== null)
        {
            this.widgetData.widget_id = widget_id

            if (widget_id === 'free')
            {
                widget_id = widget_id + '?route=' + Helpers.getQueryParam('route')
            }

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
  },

  render: (h) => h(App)
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
