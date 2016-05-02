<template>
  <div id="app">
  	<widget-header></widget-header>
    <component :is="currentView"></component>
  </div>
</template>

<script>

import WidgetHeader from './components/WidgetHeader.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Store from './store'

export default {
	data: () => Store,
	
	components: {
		WidgetHeader, Page1, Page2
	}
}
</script>