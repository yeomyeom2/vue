<template>
  <section class="sect-posting">
	<h1 class="tit">Posting</h1>
	<ul class="list-posting">
		<PostingItem v-for="(post, index) in posts.slice(0,5)" :key="index">
			<NuxtLink :to="`/detail/${post.id}`">{{ post.title }}</NuxtLink>
		</PostingItem>
	</ul>
  </section>
</template>

<script setup>
const { data: posts, error } = await useFetch('https://jsonplaceholder.typicode.com/posts')
// console.log(posts.value?.[0]);
// console.log(posts.value);
</script>

<style>

</style>