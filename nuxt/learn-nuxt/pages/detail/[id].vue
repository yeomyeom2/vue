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

// console.log(data);

const addToCart = () => {
	// console.log(111)
	store.addCartItem(data.value);
	router.push('/cart');
};
</script>

<style scoped>

</style>