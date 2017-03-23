<template>
	<div>
		<hr class="m-t-md">
		<p class="talking-point-heading">{{ widgetData.talkingPointHeadline }}</p>
		<ul>
			<li class="m-b-sm" v-for="talkingPoint in widgetData.talkingPoints" track-by="$index">
				{{ talkingPoint }}
			</li>
		</ul>
	</div>
</template>
<style scoped>
	ul {
		padding-left: 20px;
	}
</style>
<script>
	import Store from '../../store'

	export default {
		data: () => Store
	}
</script>
