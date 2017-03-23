<template>
  <div class="container" id="app">
  	<loading-box></loading-box>
  	<widget-header></widget-header>
    <component :is="currentView"></component>
    <widget-footer></widget-footer>
  </div>
</template>

<script>

import LoadingBox from './components/LoadingBox.vue'
import WidgetHeader from './components/WidgetHeader.vue'
import WidgetFooter from './components/WidgetFooter.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'
import Page4 from './components/Page4.vue'
import Page5 from './components/Page5.vue'
import WrapUp from './components/WrapUp.vue'
import Errors from './components/Errors.vue'
import Store from './store'

export default {
	data: () => Store,
	
	components: {
		LoadingBox, WidgetHeader, Page1, Page2, Page3, Page4, Page5, WrapUp, WidgetFooter, Errors
	}
}
</script>