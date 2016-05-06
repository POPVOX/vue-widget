<template>
  <div>
  	<p>Dear your legislators,</p>
  	<address>
  		{{ userData.firstName }} {{ userData.lastName }}
  		{{ userData.address }}
  		{{ userData.address_2 }}
  		{{ userData.city }}, {{ userData.state }} {{ userData.zipCode }}
  	</address>
    <p><pre>{{ userData.message }}</pre></p>
  </div>
</template>

<script>

import Store from '../store'

export default {
	data: () => Store
}
</script>
