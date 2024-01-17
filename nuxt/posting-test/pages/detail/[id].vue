<template>
  <section class="sect-detail">
	<h1>{{ post.title }}</h1>
	<div>
		{{ post.body }}
	</div>
  </section>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
const { data: post, error } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
// console.log(route.params.id);
</script>

<style>

</style>