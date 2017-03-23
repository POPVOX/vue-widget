<template>
	<div id="main-widget-content">
		<div v-show="messageSent" class="icon svg text-center m-t-sm" :class="{'icon-success' : messageSent}">
            <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                <g fill="none" stroke="#8EC343" stroke-width="2">
                    <circle cx="36" cy="36" r="35" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>
                    <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>
                </g>
            </svg>
        </div>
        <div class="m-t-md text-center process-text">
            <span class="font-bold no-margins"> Your message is being processed! </span>
        </div>
        <hr>
		<div v-if="userData.isNewUser">
			<p>We need to verify your email address before we can deliver your message. Look for a verification email from POPVOX and click the link in the email to finish the process.</p>
			<p>Don't see the email? Check your spam folder or email us at <a href="mailto:support@popvox.com">support@popvox.com</a>.</p>
			<hr>
		</div>
		<div v-if="widgetData.customFinish" v-html="widgetData.customFinish">
		</div>
		<div v-else>
			<h4>Share this campaign!</h4>
			<div v-if="showShareButtons">
				Tell your friends to add their voice! Share this campaign with them on your social media channels.
				<social-share-buttons></social-share-buttons>
			</div>
			<div v-else>
				Tell your friends to add their voice! Share this campaign with them on social media using this link:
				<p class="m-t-md"><a :href="embeddedUrl">{{ embeddedUrl }}</a></p>
			</div>
		</div>
	</div>
</template>
<style scoped>
    .process-text {
        margin-top: 10px;
    }
</style>
<script>
	import Store from '../store'
	import SocialShareButtons from './SocialShareButtons.vue'

	export default {
		data: () => Store,

		components: {
			SocialShareButtons
		},

        mounted: function()
		{
			this.messageSent = true
		}
	}
</script>
