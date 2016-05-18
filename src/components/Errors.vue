<template>
	<div class="well">
		<h2 v-if="!active" class="text-center">This widget is no longer active.  Please contact POPVOX support</h2>
		<h2 v-else class="text-center">This widget is not on a registered domain.  Please contact POPVOX support</h2>
	</div>
</template>

<script>

	import Store from '../store' 

	export default {
		data: () => Store
	}
</script>