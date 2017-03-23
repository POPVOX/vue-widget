<template>
	<div class="user-info">
		<hr>
		<form @submit.prevent="sendUserInfo()">
			<div class="form-group">
				<label for="address">Address</label>
				<input v-model="userData.address" type="text" class="form-control" name="address" id="address" v-validate="'required'" :class="{'input': true, 'error': errors.has('address') }">
				<label v-show="errors.has('address')" class="error">{{ errors.first('address') }}</label>
			</div>
			<div class="form-group">
				<label for="address_2">Address 2</label>
				<input v-model="userData.address_2" type="text" class="form-control" name="address_2" id="address_2">
			</div>
			<div class="form-group">
				<label for="city">City</label>
				<input v-model="userData.city" type="text" class="form-control" name="city" id="city" v-validate="'required'" :class="{'input': true, 'error': errors.has('city') }">
				<label v-show="errors.has('city')" class="error">{{ errors.first('city') }}</label>
			</div>
			<div class="form-group">
				<label for="phone">Phone</label>
				<input v-model="userData.phone" type="text" class="form-control" name="phone" id="phone" v-validate="'required|min:10'" :class="{'input': true, 'error': errors.has('phone') }">
				<label v-show="errors.has('phone')" class="error">{{ errors.first('phone') }}</label>
			</div>
			<hr>
			<button type="submit" class="btn btn-warning2 btn-block btn-max-width" v-bind:class="{'m-progress' : loading}">Next</button>
		</form>
	</div>
</template>

<script>
import Store from '../store'
import Helpers from '../helpers'

let checkNextStep = (data) => {
    Store.currentIndex++
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
	          response => {
                  checkNextStep(response.data)
				  this.loading = false
			  },
	          response => {
	          	console.log(this.loading)
	            this.loading = false
	          })
		},
        validateForm: function()
        {
            this.$validator.validateAll().then(() =>
            {
                this.sendUserInfo()
            }).catch(() => {
                alert('Please fill out all the required fields')
            })
        }
	}
}
</script>
