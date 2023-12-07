<template>
	<div class="app">
		<SearchInput @serchKeywordFunc="value => searchKeyword(value)" v-model="inputKeyword"
			@search="searchProducts"
			></SearchInput>
		<ul class="list-product">
			<li class="item" v-for="product in products.list" :key="product.id" @click="moveToDetailPage(product.id)">
				<img
					class="img"
					:src="product.imageUrl"
					:alt="product.name">
				<div>{{ product.name }}</div>
				<div>{{ product.price }}</div>
			</li>
		</ul>
		<button type="button" class="btn-cart" @click="moveToCartPage">Cart</button>
	</div>
  </template>
  
  <script setup>
  useHead({
	title: 'Nuxt Shopping Home',
	meta: [
		{ name: 'description', content: 'Here is home !' }
	],
	bodyAttrs: {
		class: 'test'
	},
	script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
	})

  import { ref } from 'vue';
  	const router = useRouter();
	const products = reactive({});
	const { data } = await useFetch('http://localhost:3000/products');
	products.list = data;

	// console.log(1, products.list)

	const moveToDetailPage = id => {
		// console.log(id);
		router.push(`detail/${id}`);
	};


	const inputKeyword = ref('');
	const searchKeyword = (value) => {
		inputKeyword.value = value;
	};

	const searchProducts = async () => {
		const { data } = await useFetch(`http://localhost:3000/products?name_like=${inputKeyword.value}`);
		products.list = data;
	};

	const moveToCartPage = () => {
		router.push('/cart');
	};
  </script>
  
  <style lang="scss" scoped>
  .list-product	{display: flex;flex-wrap:wrap;justify-content: space-between;list-style:none;
	.item	{width: 50%;padding: 10px;text-align: center;box-sizing: border-box;
		.img	{width: 300px;}
	}
}

.btn-cart	{position: fixed;right: 30px;bottom: 30px;width: 100px;height: 100px;border-radius: 50%;background-color: skyblue;}
  </style>