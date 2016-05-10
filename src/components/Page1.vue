<template>
	<div>
		<p class="talking-point-headling">{{ widgetData.talkingPointHeadline }}</p>
    <ul id="example-1">
      <li v-for="talkingPoint in widgetData.talkingPoints" track-by="$index">
        {{ talkingPoint }}
      </li>
    </ul>
    <form @submit.prevent="startCommentForm()" action="">
      <div class="form-group">
        <textarea v-model="userData.message" class="form-control" rows="8"></textarea>
      </div>
      <div class="form-group">
        <input v-model="userData.email" type="text" class="form-control" placeholder="enter your email address" required>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Submit</button>
    </form>
  </div>
</template>

<script>
import Store from '../store'

let checkNextStep = (data) =>
{
  if (data.type === 'commentReady')
  {
    Store.currentIndex++
    Store.loading = false
  }
}

export default {
	data: () => Store,
  	
  	methods: {
      startCommentForm: function()
      {
        // save this email + comment and then return a bool for the existance of this email in our db
        this.loading = true

        this.$http.post(this.widgetTrackURL, {
          step: 'step_1',
          actions: ['entered_email', 'wrote_message'],
          hash: this.techDetails.visitHash,
          bill_id: this.widgetData.billID,
          email: this.userData.email,
          message: this.userData.message
        }).then(
          response => checkNextStep(response.data),
          response => {
            this.loading = false
            alert(response.data.error)
          })
      }
  	},

    ready: function()
    {
      this.$http.post(this.widgetTrackURL, {
          widget_id: this.widgetData.widgetID,
          actions: ['viewed_widget'],
          hash: this.techDetails.visitHash,
          ip_address: this.techDetails.ipAddress
        }).then(response => console.log(response))
    }
}
</script>
