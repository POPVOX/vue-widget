<template>
	<template v-if="customField.type === 'select'">
		<label>{{ customField.text }}</label>
		<select v-model="customField.selectedValue" class="form-control">
		  <option v-for="value in customField.values" value="{{ value.id }}">{{ value.text }}</option>
		</select>
	</template>
</template>

<script>

	import Store from '../store' 

	export default {
		data: () => Store
	}
</script>