<template>
	<p class="talking-point-heading">{{ widgetData.talkingPointHeadline }}</p>
	<ul>
	  <li v-for="talkingPoint in widgetData.talkingPoints" track-by="$index">
	    {{ talkingPoint }}
	  </li>
	</ul>
</template>

<script>
	import Store from '../../store'

	export default {
		data: () => Store
	}
</script>