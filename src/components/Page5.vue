<template>
  <div>
  	<address>
  		{{ userData.prefix }} {{ userData.firstName }} {{ userData.lastName }} {{ userData.suffix }} <br>
  		{{ userData.address }} <br>
  		{{ userData.address_2 }} <br v-if="userData.address_2">
  		{{ userData.city }}, {{ userData.state }} {{ userData.zipCode }}
  	</address>
    <p class="preview-hold"><pre class="pre-scrollable">Dear your legislators,

{{ userData.message }}</pre>
    </p>
    <button @click="sendMessage()" type="submit" class="btn btn-primary btn-block">Send your message</button>
  </div>
</template>

<script>

import Store from '../store'
import Helpers from '../helpers'

export default {
	data: () => Store,

  methods: {
    sendMessage: function()
    {
      this.loading = true

      this.$http.post(this.widgetTrackURL, {
          step: 'step_4',
          sandbox: this.sandbox,
          actions: ['submitted_message', 'completed'],
          hash: this.techDetails.visitHash,
          email: this.userData.email,
          user_id: this.userData.userID,
          widget_id: this.widgetData.widgetID,
          widget_data: {
            user_id: this.userData.userID,
            bill_id: this.widgetData.billID,
            position: this.widgetData.position,
            message: this.userData.message,
            first_name: this.userData.firstName,
            last_name: this.userData.lastName,
            email: this.userData.email,
            zip_code: this.userData.zipCode,
            prefix: this.userData.prefix,
            suffix: this.userData.suffix,
            address: this.userData.address,
            address_2: this.userData.address_2,
            city: this.userData.city,
            phone: this.userData.phone,
            state: this.userData.state,
            congressional_district: this.userData.congressionalDistrict,
            custom_field: this.customField.selectedValue, 
            widget_id: this.widgetData.widgetID,
            origin: this.widgetData.origin
          }
        }).then(
          response => {
            this.currentIndex++
            this.loading = false
          },
          response => {
            this.loading = false
            alert(response.data.error)
          })
    }
  }
}
</script>
