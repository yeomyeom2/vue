<template>
	<SlideImg></SlideImg>
  <section class="sect-posting">
	<h1 class="tit">글 목록</h1>
	<ul class="list-posting">
		<PostingItem v-for="(post, index) in posts.slice(0, sliceCount)" :key="index">
			<NuxtLink :to="`/detail/${post.id}`">{{ post.title }}</NuxtLink>
			<button type="button" @click="copyUrl(`/detail/${post.id}`)">URL Copy</button>
		</PostingItem>
	</ul>
  </section>
  <LayerDefault :class="{on: stateCopy}" @layerCloseEmit="stateCopy = false"></LayerDefault>
</template>

<script setup>
let sliceCount = ref(5);
let stateCopy = ref(false);
const { data: posts, error } = await useFetch('https://jsonplaceholder.typicode.com/posts');
let windowWidth;

function postingCountChange() { //분기에 따라 포스팅 개수 다름(5 or 10)
	windowWidth = ref(window.innerWidth);
	windowWidth.value < 1280
		? sliceCount.value = 5
		: sliceCount.value = 10
	// console.log(sliceCount);
}

onMounted(() => {
	postingCountChange();
	window.addEventListener('resize', postingCountChange);
})

function copyUrl(url) { //url copy
	navigator.clipboard.writeText(url);
	stateCopy.value = true;
}
</script>

<style scoped lang="scss">
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
}
</style>