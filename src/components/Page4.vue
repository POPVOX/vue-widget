<template>
  <div>
  	<p>Dear your legislators,</p>
  	<address>
  		{{ userData.prefix }} {{ userData.firstName }} {{ userData.lastName }} {{ userData.suffix }} <br>
  		{{ userData.address }} <br>
  		{{ userData.address_2 }}
  		{{ userData.city }}, {{ userData.state }} {{ userData.zipCode }}
  	</address>
    <p><pre class="pre-scrollable">{{ userData.message }}</pre></p>
  </div>
</template>

<script>

import Store from '../store'

export default {
	data: () => Store
}
</script>
