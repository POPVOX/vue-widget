<template>
	<div id="main-widget-content">
		<div v-if="userData.isNewUser">
			In order for your message to be sent, we need you to confirm your email address. Check your inbox for a message from POPVOX to complete the process.
		</div>
		<div v-else>
			Thanks for weighing in. Now tell your friends to add their voice! Share this campaign with them on social media using this link. <a :href="embeddedUrl">{{ embeddedUrl }}</a>
		</div>
	</div>
</template>

<script>
	import Store from '../store' 

	export default {
		data: () => Store
	}
</script>