<template>
	<div>
		<p class="talking-point-headling">{{ widgetData.talkingPointHeadline }}</p>
    <ul id="example-1">
      <li v-for="talkingPoint in widgetData.talkingPoints">
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

export default {
	data: () => Store,
  	
  	methods: {
      startCommentForm: function()
      {
        // save this email + comment and then return a bool for the existance of this email in our db
        this.loading = true
      }
  	},

    ready: function()
    {
      this.$http.post('/track/widget', {
          widget_id: this.widgetData.widgetID,
          action: 'viewed_widget',
          hash: this.techDetails.visitHash,
          ip_address: this.techDetails.ipAddress
        }).then(response => console.log(response))
    }
}
</script>
