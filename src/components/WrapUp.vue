<template>
	<div v-if="userData.isNewUser">
		In order for your letter to be sent we need you to confirm your email address. Check your email for a message from POPVOX to confirm.
	</div>
	<div v-else>
		Tell your friends about this campaign
	</div>
</template>

<script>
	import Store from '../store' 

	export default {
		data: () => Store
	}
</script>