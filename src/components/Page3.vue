<template>
	<div id="main-widget-content">
		<hr>
		<div class="user-info">
			<form @submit.prevent="sendUserInfo()">
				<div class="form-group">
					<label for="first_name">First Name</label>
					<input v-model="userData.firstName" type="text" class="form-control" id="first_name">
				</div>
				<div class="form-group">
					<label for="last_name">Last Name</label>
					<input v-model="userData.lastName" type="text" class="form-control" id="last_name">
				</div>
				<div class="form-group">
					<label for="prefix">Prefix</label>
					<select v-model="userData.prefix" class="form-control" id="prefix">
					  <option value="">...</option>
					  <option value="Mr.">Mr</option>
					  <option value="Ms.">Ms</option>
					  <option value="Mrs.">Mrs</option>
					  <option value="Miss">Miss</option>
					  <option value="Dr.">Dr.</option>
					  <option value="Rev.">Rev.</option>
					  <option value="Sister">Sister</option>
					</select>
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
					<input v-model="userData.zipCode" type="text" class="form-control" id="zip_code">
				</div>
				<hr>
				<button type="submit" class="btn btn-primary btn-block btn-max-width">Next</button>
			</form>
		</div>
	</div>
</template>

<script>
import Store from '../store'
import Helpers from '../helpers'

let checkNextStep = () => {
    Store.currentIndex++
    Helpers.fakeLoad()

    if (!Store.userLoggedIn)
	{
		Helpers.mapUserDataToStore()
	}
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
	          driver: pvoxGlobal.driver,
	          photo: this.userData.photo,
	          widget_id: this.widgetData.widgetID,
	          user_id: this.userData.userID
	        }).then(
	          response => {
	          	pvoxGlobal.userObject = response.data.userData
	          	checkNextStep()
	          },
	          response => {
	            this.loading = false
	            alert(response.data.error)
	          })
		}
	}
}
</script>