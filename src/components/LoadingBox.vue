<template>
	<div v-show="loading" id="block-load"></div>
</template>

<script>

	import Store from '../store' 

	export default {
		data: () => Store
	}
</script>