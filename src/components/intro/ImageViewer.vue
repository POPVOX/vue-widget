<template>
	<p class="talking-point-heading">{{ widgetData.talkingPointHeadline }}</p>
	<div class="image-hold">
		<img :src="widgetData.imageUrl" alt="">
	</div>
</template>

<script>
	import Store from '../../store'

	export default {
		data: () => Store
	}
</script>