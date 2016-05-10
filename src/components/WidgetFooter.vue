<template>
	<div class="widget-footer">
		<div class="footer-links clearfix">
			<a href="https://www.popvox.com" class="pull-left">powered by POPVOX</a>
			<a href="https://www.popvox.com/privacy" class="pull-right">privacy policy</a>
		</div>
	<p><small>{{ widgetFooter.footerText }}</small></p>
	</div>
</template>

<script>

	import Store from '../store' 

	export default {
		data: () => Store
	}
</script>