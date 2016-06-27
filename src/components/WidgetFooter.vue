<template>
	<div class="widget-footer">
		<hr>
		<div class="footer-links clearfix">
			<a href="https://www.popvox.com" class="pull-left">powered by POPVOX</a>
			<a href="https://www.popvox.com/privacy" class="pull-right">privacy policy</a>
		</div>
		<p><small>{{ widgetFooter.footerText }}</small></p>
		<hr>
	</div>
</template>

<script>

	import Store from '../store' 

	export default {
		data: () => Store
	}
</script>