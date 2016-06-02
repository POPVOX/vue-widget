<template>
	<span v-if="sandbox" class="label label-danger sandbox-alert">Sandbox Mode - No data being tracked</span>
	<div class="pvox-header">
		<h1>{{ widgetHeader.headlines.length > 0 ? widgetHeader.headlines[currentIndex].main : '' }}</h1>
		<p>{{ widgetHeader.headlines.length > 0 ? widgetHeader.headlines[currentIndex].sub : '' }}</p>
	</div>
	<div v-show="widgetData.position === '*' && currentIndex === 0" class="form-group">
        <div class="col-md-12">
            <label class="radio-inline">
                <input v-model="widgetData.userPosition" checked="checked" name="position" type="radio" value="+">
                Support
            </label>
            <label class="radio-inline">
                <input v-model="widgetData.userPosition" checked="checked" name="position" type="radio" value="-">
                Oppose
            </label>
        </div>
    </div>
</template>

<script>
	import Store from '../store'

	export default {
		data: () => Store
	}
</script>