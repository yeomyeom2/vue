<template>
	<div>
		<header>
			<h1><NuxtLink to="/">Nuxt Shopping</NuxtLink></h1>
		</header>
	  <slot />
	</div>
  </template>
  
  <script>
  export default {
	created() {
		// console.log(this.$route)
	}
  }
  </script>
  
  <style>
  
  </style>