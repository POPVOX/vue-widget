<template>
	<div class="widget-social-login">
  		<p>Sign in with Social Media:</p>
		<a @click.prevent="socialLogin(520, 420)" class="btn btn-block btn-social btn-facebook" href="/authorize/social-login/facebook/popup">
        	<span class="fa fa-facebook"></span> Sign in with Facebook
        </a>
        <a @click.prevent="socialLogin(520, 420)" class="btn btn-block btn-social btn-linkedin" href="/authorize/social-login/linkedin/popup">
        	<span class="fa fa-linkedin"></span> Sign in with LinkedIn
        </a>
        <a @click.prevent="socialLogin(520, 420)" class="btn btn-block btn-social btn-google" href="/authorize/social-login/google/popup">
        	<span class="fa fa-google"></span> Sign in with Google+
        </a>
        <hr>
        <p>Sign in with email</p>
		<form @submit.prevent="startCommentForm()" action="">
	      <div class="form-group">
	        <input v-model="userData.email" type="text" class="form-control" placeholder="enter your email address" required>
	      </div>
	      <div class="form-group">
	        <input v-model="userData.password" type="text" class="form-control" placeholder="enter your email password" required>
	      </div>
	      <button type="submit" class="btn btn-primary btn-block">Submit</button>
	    </form>
	</div>
</template>

<script>
import Store from '../store'
import Helpers from '../helpers'

let checkNextStep = () => {
	// if the user doesn't have an address set - we need to force them to fill out everything
    Store.currentIndex = Store.userData.address.length ? Store.currentIndex + 2 : Store.currentIndex + 1
    Helpers.fakeLoad()
}

let updateUserLoginData = () => {
	Store.userLoggedIn = pvoxGlobal.loggedInUser
	Store.loading = true

	if (Store.userLoggedIn)
	{
		Helpers.mapUserDataToStore()
	}

	checkNextStep()
}

export default {
		data: () => Store,

		methods: {
			socialLogin: function(width, height)
			{
				let leftPosition, topPosition
			    
			    leftPosition = (window.screen.width / 2) - ((width / 2) + 10)
			    topPosition = (window.screen.height / 2) - ((height / 2) + 50)
			    
			    let windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no"
			    
			    let win = window.open(event.target.href, 'widgetSocialLogin', windowFeatures)

			    // now let's poll for the social login window to close and move on
			    let interval = window.setInterval(() => {
			        if (win === null || win.closed) {
		                window.clearInterval(interval)
		                updateUserLoginData()
			        }
			    }, 1000)
			}
		}
	}
</script>
