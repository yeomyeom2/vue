<template>
  <div>
	<h1>Cart 페이지</h1>
	<div>
		<ul>
			<li v-for="cartItem in store.cartItems" :key="cartItem.id">
				<img :src="cartItem.imageUrl" :alt="cartItem.name">
				<div>{{ cartItem.name }}</div>
			</li>
		</ul>
	</div>
	<button>구매하기</button>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/index"

const store = useCartStore();
</script>

<style>

</style>