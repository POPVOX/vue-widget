<template>
	<hr>
	<div class="user-info">
		<form @submit.prevent="sendUserInfo()">
			<div class="form-group">
				<label for="address">Address</label>
				<input v-model="userData.address" type="text" class="form-control" id="address" required>
			</div>
			<div class="form-group">
				<label for="address_2">Address 2</label>
				<input v-model="userData.address_2" type="text" class="form-control" id="address_2">
			</div>
			<div class="form-group">
				<label for="city">City</label>
				<input v-model="userData.city" type="text" class="form-control" id="city" required>
			</div>
			<div class="form-group">
				<label for="phone">Phone</label>
				<input v-model="userData.phone" type="text" class="form-control" id="phone" required>
			</div>
			<hr>
			<button type="submit" class="btn btn-primary btn-block btn-max-width">Next</button>
</form>
	</div>
</template>

<script>
import Store from '../store'
import Helpers from '../helpers'

let checkNextStep = (data) => {
	// if (data.type === 'userCreated')
	// {
		
	// }
    Store.currentIndex++
    Helpers.fakeLoad()
}

export default {
	data: () => Store,

	methods: {
		sendUserInfo: function()
		{
			this.loading = true

			// make sure the phone number is formatted correctly on submit
			this.userData.phone = Helpers.formatPhoneNumber(this.userData.phone)

			if (this.userData.phone === '')
			{
				this.loading = false
				return false
			}

	        this.$http.post(this.widgetTrackURL, {
	          step: 'step_3',
	          sandbox: this.sandbox,
	          actions: ['entered_address'],
	          hash: this.techDetails.visitHash,
	          address: this.userData.address,
	          address_2: this.userData.address_2,
	          city: this.userData.city,
	          state: this.userData.state,
	          phone: this.userData.phone,
	          email: this.userData.email,
	          user_id: this.userData.userID,
	          widget_id: this.widgetData.widgetID,
	        }).then(
	          response => checkNextStep(response.data),
	          response => {
	          	console.log(this.loading)
	            this.loading = false
	          })
		}
	}
}
</script>