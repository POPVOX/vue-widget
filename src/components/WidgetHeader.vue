<template>
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