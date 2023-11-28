<template>
  <div>
	<h1>상세 페이지</h1>
	<div>
		<img :src="data.imageUrl" :alt="data.name">
		<div>name: {{ data.name }}</div>
		<div>price: {{ data.price }}</div>
		<button type="button" @click="addToCart">Add to Cart</button>
	</div>
  </div>
</template>

<script setup>
import { useCartStore } from "../../stores/index"
const store = useCartStore();

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const { data } = await useAsyncData(
  'mountains',
  () => $fetch(`http://localhost:3000/products/${id}`)
)

const addToCart = async () => {
	console.log('before');
	await $fetch('http://localhost:3000/carts', {
		method: 'POST',
		body: data.value,
	});

	router.push('/cart');
	console.log('after');
};
</script>

<style scoped>

</style>