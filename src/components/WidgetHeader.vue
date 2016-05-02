<template id="widget-header">
	<div class="pvox-header">
		<h1>{{ widgetHeader.headline }}</h1>
		<p>{{ widgetHeader.subHead }}</p>
	</div>
</template>

<script>
	import Store from '../store'

	export default {
		data: () => Store
	}
</script>