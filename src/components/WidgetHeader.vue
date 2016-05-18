<template>
	<span v-if="sandbox" class="label label-danger sandbox-alert">Sandbox Mode - No data being tracked</span>
	<div class="pvox-header">
		<h1>{{ widgetHeader.headlines.length > 0 ? widgetHeader.headlines[currentIndex].main : '' }}</h1>
		<p>{{ widgetHeader.headlines.length > 0 ? widgetHeader.headlines[currentIndex].sub : '' }}</p>
	</div>
</template>

<script>
	import Store from '../store'

	export default {
		data: () => Store
	}
</script>