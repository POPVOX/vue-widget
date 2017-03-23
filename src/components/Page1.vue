<template>
	<div id="main-widget-content">
      <div class="row">
        <div class="col-sm-12" id="intro-component">
          <component :is="introViewComponent"></component>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-12">
          <form @submit.prevent="validateForm()">
            <div class="form-group">
              <p><small><strong>Personalize it:</strong>  A personalized constituent message is one of the most effective ways to influence lawmakers.</small></p>
              <textarea name="message" v-model="userData.message" id="pvox-comment" class="form-control" rows="8" v-validate="'required'" :class="{'input': true, 'error': errors.has('message') }"></textarea>
              <label v-show="errors.has('message')" class="error">{{ errors.first('message') }}</label>
              <div class="text-right m-t-sm">
                <button @click="launchTextPopup(600, 600)" type="button" class="btn btn-default text-pop">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </button>
              </div>
            </div>
            <hr>
            <div v-if="customField" class="form-group">
              <custom-field></custom-field>
            </div>
            <div class="form-group">
              <input name="email" v-model="userData.email" type="text" class="form-control" placeholder="enter your email address" v-validate="'required|email'" data-vv-delay="1000" :class="{'input': true, 'error': errors.has('email') }">
              <label v-show="errors.has('email')" class="error">{{ errors.first('email') }}</label>
            </div>
            <button type="submit" class="btn btn-warning2 btn-block btn-max-width" v-bind:class="{'m-progress' : loading}">Next</button>
          </form>
        </div>
      </div>
  </div>
</template>
<style scoped>
  hr {
        margin-top: 10px;
    }
</style>
<script>
import Store from '../store'
import Helpers from '../helpers'
import CustomField from './CustomField.vue'
import TalkingPoints from './intro/TalkingPoints.vue'
import VideoPlayer from './intro/VideoPlayer.vue'
import ImageViewer from './intro/ImageViewer.vue'

let checkNextStep = (data) =>
{
  if (data.type === 'commentReady')
  {
    Store.currentIndex++
  }
  else if (data.type === 'newUser')
  {
    Store.userData.isNewUser = true
    Store.currentIndex++
  }
  else {
    alert('You have already commented on this widget.')
  }

  Store.loading = false
}

export default {
	data: () => Store,

  components: {
    CustomField, TalkingPoints, VideoPlayer, ImageViewer
  },
  	
  	methods: {
      startCommentForm: function()
      {
        if (this.widgetData.userPosition === '*')
        {
          // they haven't chosen a position yet on a neutral widget - so make them
          alert('You have to choose a position to continue.')
          return false
        }

        // save this email + comment and then return a bool for the existance of this email in our db
        this.loading = true

        this.$http.post(this.widgetTrackURL, {
          step: 'step_1',
          sandbox: this.sandbox,
          actions: ['entered_email', 'wrote_message'],
          hash: this.techDetails.visitHash,
          bill_id: this.widgetData.billID,
          email: this.userData.email.trim(),
          message: this.userData.message,
          widget_id: this.widgetData.widgetID
        }).then(
          response => checkNextStep(response.data),
          response => {
            this.loading = false
            alert(response.data.error)
          })
      },
      launchTextPopup: Helpers.showMessagePopup,
      validateForm: function()
      {
          this.$validator.validateAll().then(() =>
          {
              this.startCommentForm()
          }).catch(() => {
              alert('Please fill out all the required fields')
          })
      }
  	},

    mounted: function()
    {
      this.$http.post(this.widgetTrackURL, {
          sandbox: this.sandbox,
          widget_id: this.widgetData.widgetID,
          actions: ['viewed_widget'],
          hash: this.techDetails.visitHash,
          ip_address: this.techDetails.ipAddress,
          referer: this.techDetails.referer
        })
    }
}
</script>
