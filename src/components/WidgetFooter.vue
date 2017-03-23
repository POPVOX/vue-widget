<template>
	<div>
		<div class="row">
			<div class="col-sm-12 widget-footer">
				<hr>
				<div class="footer-links">
					<a href="https://www.popvox.com" class="pull-left text-warning2"><small>powered by POPVOX</small></a>
					<a href="https://www.popvox.com/privacy" class="pull-right text-warning2"><small>privacy policy</small></a>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 m-t-sm">
				<p><small>{{ widgetFooter.footerText }}</small></p>
				<hr>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.widget-footer {
		margin-top: 50px;
	}
</style>
<script>

	import Store from '../store' 

	export default {
		data: () => Store
	}
</script>
