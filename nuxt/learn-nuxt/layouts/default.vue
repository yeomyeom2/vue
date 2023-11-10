<template>
	<div>
		<header>
			<h1>{{ $route.name }} 페이지</h1>
			<!-- <nuxt-link to="/">홈페이지</nuxt-link>
			<nuxt-link to="/main">메인 페이지</nuxt-link>
			<nuxt-link to="/product">상품 페이지</nuxt-link> -->
			<NuxtLink to="/">홈페이지</NuxtLink>
			<NuxtLink to="/main">메인 페이지</NuxtLink>
			<NuxtLink to="/product">상품 페이지</NuxtLink>
		</header>
	  <slot />
	</div>
  </template>
  
  <script>
  export default {
	created() {
		console.log(this.$route)
	}
  }
  </script>
  
  <style>
  
  </style>