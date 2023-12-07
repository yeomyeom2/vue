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

useHead({
  title: `Nuxt Shopping Detail Page - ${data.value.name}`,
  meta: [
	  { name: 'description', content: 'Here is datail page !' },
	  { name: 'og:title', content: '상품 상세 페이지' },
	  { name: 'og:description', content: '상품의 상세 정보를 확인해보세요.' },
	  { name: 'og:image', content: 'https://picsum.photos/640' },
  ],
  bodyAttrs: {
	  class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
  })
</script>

<style scoped>

</style>