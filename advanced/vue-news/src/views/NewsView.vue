<template>
	<div>
		<div v-for="user in this.$store.state.news" v-bind:key="user">{{ user.title }}</div>
	</div>
</template>

<script>

export default {
	created() {
		this.$store.dispatch('FETCH_NEWS');
		// fetchNewsList()
		// 	.then(response => {
		// 		console.log('news: ' + response);
		// 		this.users = response.data;
		// 	})
		// 	.catch(error => {
		// 		console.log(error);
		// 	});
	}

}
</script>

<style>

</style>