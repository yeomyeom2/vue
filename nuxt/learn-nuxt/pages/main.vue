<template>
  <div>
	<p>메인 페이지입니다</p>
	<!-- <div>
		{{ response }}
	</div> -->
	<ProductList></ProductList>
  </div>
</template>

<script setup>
import ProductList from '../components/ProductList.vue'

// const response = await $fetch('http://localhost:3000/products').catch((error) => error.data);
</script>

<style>

</style>