<template>
  <div>
		<ul>
			<li v-for="(cartItem, index) in cartItems" :key="index">
				<img :src="cartItem.imageUrl" :alt="cartItem.name">
				<div>{{ cartItem.name }}</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
const { data: cartItems } = await useFetch('http://localhost:3000/carts');
</script>

<style>

</style>