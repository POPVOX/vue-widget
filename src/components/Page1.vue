<template>
	<div id="main-widget-content">
    <div id="intro-component">
  		<component :is="introViewComponent"></component>
    </div>
    <form @submit.prevent="startCommentForm()">
      <div class="form-group">
        <textarea v-model="userData.message" id="pvox-comment" class="form-control" rows="8"></textarea>
        <button @click="launchTextPopup(600, 600)" type="button" class="btn btn-default pull-right text-pop">
          <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
        </button>
      </div>
      <div v-if="customField" class="form-group">
        <custom-field></custom-field>
      </div>
      <div class="form-group">
        <input v-model="userData.email | trim" type="text" class="form-control" placeholder="enter your email address" required>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Submit</button>
    </form>
  </div>
</template>

<script>
import Store from '../store'
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
        // save this email + comment and then return a bool for the existance of this email in our db
        this.loading = true

        this.$http.post(this.widgetTrackURL, {
          step: 'step_1',
          sandbox: this.sandbox,
          actions: ['entered_email', 'wrote_message'],
          hash: this.techDetails.visitHash,
          bill_id: this.widgetData.billID,
          email: this.userData.email,
          message: this.userData.message,
          widget_id: this.widgetData.widgetID
        }).then(
          response => checkNextStep(response.data),
          response => {
            this.loading = false
            alert(response.data.error)
          })
      },
      launchTextPopup: function(width, height)
      {
        let leftPosition, topPosition
          
        leftPosition = (window.screen.width / 2) - ((width / 2) + 10)
        topPosition = (window.screen.height / 2) - ((height / 2) + 50)
        
        let windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,scrolling=no,location=no,directories=no"
        
        let win = window.open('/comments/message-popup', 'widgetMessagePopup', windowFeatures)

        pvoxGlobal.popupMessageOpen = true
      }
  	},

    ready: function()
    {
      this.$http.post(this.widgetTrackURL, {
          sandbox: this.sandbox,
          widget_id: this.widgetData.widgetID,
          actions: ['viewed_widget'],
          hash: this.techDetails.visitHash,
          ip_address: this.techDetails.ipAddress,
          referer: this.techDetails.referer
        }).then(response => console.log(response))
    }
}
</script>
