<template>
	<div class="app">
		<div class="search">
			<input type="text">
		</div>
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
	</div>
  </template>
  
  <script setup>
  	const router = useRouter();
	const products = reactive({});
	const { data } = await useFetch('http://localhost:3000/products');
	products.list = data;

	const moveToDetailPage = id => {
		console.log(id);
		router.push(`detail/${id}`);
	};
  </script>
  
  <style lang="scss" scoped>
  .list-product	{display: flex;flex-wrap:wrap;justify-content: space-between;list-style:none;
	.item	{width: 50%;padding: 10px;text-align: center;box-sizing: border-box;
		.img	{width: 300px;}
	}
}
  </style>