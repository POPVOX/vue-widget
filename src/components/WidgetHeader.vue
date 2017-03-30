<template>
	<div>
        <div v-if="sandbox" class="alert alert-info"><i class="fa fa-user-secret"></i> <strong>Sandbox Mode</strong><br>No data currently being tracked</div>
        <div class="row">
            <div class="col-sm-12 pvox-header">
                <h3 v-bind:class="[currentIndex === 5 ? 'text-center' : '']">{{ widgetHeader.headlines.length > 0 ? widgetHeader.headlines[currentIndex].main : '' }}</h3>
                <p>{{ widgetHeader.headlines.length > 0 ? widgetHeader.headlines[currentIndex].sub : '' }}</p>
            </div>
        </div>
        <div v-show="widgetData.position === '*' && currentIndex === 0" class="row m-t-sm">
            <div class="col-sm-12">
                <div class="weigh-in-buttons">
                    <div class="pull-left" style="width: 45%">
                        <button class="btn btn-block pull-left" v-bind:class="[widgetData.userPosition === '+' ? 'btn-success' : 'btn-default']" type="button" @click="setPosition('+')"><i class="fa fa-chevron-circle-up" v-bind:class="[widgetData.userPosition !== '+' ? 'text-success' : '']"></i> SUPPORT</button>
                    </div>
                    <div class="pull-right" style="width: 45%">
                        <button class="btn btn-block pull-left" v-bind:class="[widgetData.userPosition === '-' ? 'btn-warning' : 'btn-default']" type="button" @click="setPosition('-')"><i class="fa fa-chevron-circle-down" v-bind:class="[widgetData.userPosition !== '-' ? 'text-warning' : '']"></i> OPPOSE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .fa-user-secret {
        font-size: 20px;
    }
</style>
<script>
	import Store from '../store'

	export default {
		data: () => Store,
        methods: {
            setPosition: function(position)
            {
                this.widgetData.userPosition = position
                console.log(this.widgetData)
            }
        }
	}
</script>
