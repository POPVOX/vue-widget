<template>
	<div id="main-widget-content">
		<div v-if="userData.isNewUser">
			<p>We need to verify that your email address is yours. Look for a verification email from POPVOX and click the link in the email.</p>
			<p>Don't see the email? Check your spam folder or email us at <a href="mailto:support@popvox.com">support@popvox.com</a>.</p>
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