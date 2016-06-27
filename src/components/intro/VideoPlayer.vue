<template>
	<p class="talking-point-heading">{{ widgetData.talkingPointHeadline }}</p>
	<div class="video-hold">
		<iframe width="420" height="315" v-bind:src="'https://www.youtube.com/embed/' + widgetData.videoUrl + '?autoplay=1'" frameborder="0" allowfullscreen></iframe>
	</div>
</template>

<script>
	import Store from '../../store'

	export default {
		data: () => Store,

		ready: function()
		{
			jQuery('.video-hold').fitVids();
		}
	}
</script>