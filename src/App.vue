<template>
  <div id="app">
    <component :is="currentView"></component>
  </div>
</template>

<script>
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Store from './store'

export default {
	data: function()
	{
		return Store;
	},
	components: {
		Page1, Page2
	}
}
</script>