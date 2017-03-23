<template>
	<div id="main-widget-content">
		<hr>
		<div class="user-info">
			<form @submit.prevent="validateForm()">
				<div class="form-group">
					<label for="first_name">First Name</label>
					<input v-model="userData.firstName" type="text" class="form-control" name="first_name" id="first_name" v-validate="'required'" data-vv-as="first name" :class="{'input': true, 'error': errors.has('first_name') }">
					<label v-show="errors.has('first_name')" class="error">{{ errors.first('first_name') }}</label>
				</div>
				<div class="form-group">
					<label for="last_name">Last Name</label>
					<input v-model="userData.lastName" type="text" class="form-control" name="last_name" id="last_name" v-validate="'required'" data-vv-as="last name" :class="{'input': true, 'error': errors.has('last_name') }">
					<label v-show="errors.has('last_name')" class="error">{{ errors.first('last_name') }}</label>
				</div>
				<div class="form-group">
					<label for="prefix">Prefix</label>
					<select v-model="userData.prefix" class="form-control" name="prefix" id="prefix" v-validate="'required'" :class="{'input': true, 'error': errors.has('prefix') }">
					  <option value="">...</option>
					  <option value="Mr.">Mr</option>
					  <option value="Ms.">Ms</option>
					  <option value="Mrs.">Mrs</option>
					  <option value="Dr.">Dr.</option>
					</select>
					<label v-show="errors.has('prefix')" class="error">{{ errors.first('prefix') }}</label>
				</div>
				<div class="form-group">
					<label for="suffix">Suffix</label>
					<select v-model="userData.suffix" class="form-control" id="suffix">
					  <option value="">...</option>
					  <option value="Jr.">Jr.</option>
					  <option value="Sr.">Sr.</option>
					  <option value="II">II</option>
					  <option value="III">III</option>
					  <option value="IV">IV</option>
					  <option value="MD">MD</option>
					  <option value="PhD">PhD</option>
					  <option value="ESQ">ESQ</option>
					  <option value="DVM">DVM</option>
					  <option value="DDS">DDS</option>
					  <option value="RN">RN</option>
					  <option value="CPA">CPA</option>
					  </select>
					</select>
				</div>
				<div class="form-group">
					<label for="zip_code">Zip Code</label>
					<input v-model="userData.zipCode" type="text" class="form-control" name="zip_code" id="zip_code" v-validate="'required|digits:5'" data-vv-as="zip code" :class="{'input': true, 'error': errors.has('zip_code') }">
					<label v-show="errors.has('zip_code')" class="error">{{ errors.first('zip_code') }}</label>
				</div>
				<hr>
				<div v-if="!userLoggedIn" class="form-group">
					<label for="zip_code">Create a password</label>
					<input v-model="userData.password" type="password" class="form-control" name="password" id="password" v-validate="'required|min:8'" data-vv-delay="1000" :class="{'input': true, 'error': errors.has('password') }">
					<label v-show="errors.has('password')" class="error">{{ errors.first('password') }}</label>
				</div>
				<hr>
				<button type="submit" class="btn btn-warning2 btn-block btn-max-width" v-bind:class="{'m-progress' : loading}">Next</button>
			</form>
		</div>
	</div>
</template>

<script>
import Store from '../store'
import Helpers from '../helpers'

let checkNextStep = () => {
    Store.currentIndex++

    if (!Store.userLoggedIn)
	{
		Helpers.mapUserDataToStore()
	}

    Store.userLoggedIn = true
}

export default {
	data: () => Store,

	methods: {
		sendUserInfo: function()
		{
			this.loading = true

	        this.$http.post(this.widgetTrackURL, {
	          step: 'step_2',
	          sandbox: this.sandbox,
	          actions: [''],
	          hash: this.techDetails.visitHash,
	          email: this.userData.email,
	          first_name: this.userData.firstName,
	          last_name: this.userData.lastName,
	          prefix: this.userData.prefix,
	          suffix: this.userData.suffix,
	          zip_code: this.userData.zipCode,
			  password: this.userData.password,
	          driver: pvoxGlobal.driver,
	          photo: this.userData.photo,
	          widget_id: this.widgetData.widgetID,
	          user_id: this.userData.userID
	        }).then(
	          response => {
	          	pvoxGlobal.userObject = response.data.userData
	          	checkNextStep()
				this.loading = false
	          },
	          response => {
	            this.loading = false
	            alert(response.data.error)
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
