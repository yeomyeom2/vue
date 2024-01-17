<template>
  <section class="sect-posting">
	<h1 class="tit">글 목록</h1>
	<ul class="list-posting">
		<PostingItem v-for="(post, index) in posts.slice(0, sliceCount)" :key="index">
			<NuxtLink :to="`/detail/${post.id}`">{{ post.title }}</NuxtLink>
		</PostingItem>
	</ul>
  </section>
</template>

<script setup>
let sliceCount = ref(5);
const { data: posts, error } = await useFetch('https://jsonplaceholder.typicode.com/posts');
// let windowWidth;
// console.log(posts.value?.[0]);

// console.log(document.documentElement.clientWidth);
// function getWindowWidth() {
// 	document.documentElement.clientWidth >= 1280
// 		? sliceCount = 10
// 		: sliceCount = 5
// }
</script>

<style scope lang="scss">
@import '~/assets/css/_var.scss';
.list-posting	{
	margin-top: 1rem;
	border-top: 1px solid #ebedf2;

	>li	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.2rem 1rem;
		border-bottom: 1px solid #ebedf2;
	}
	a	{
		color: $color-navy;
	}
}
</style>