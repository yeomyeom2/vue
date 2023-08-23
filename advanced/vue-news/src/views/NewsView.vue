<template>
	<ul>
		<li v-for="item in this.$store.state.news" v-bind:key="item">
			<a :href="item.url">{{ item.title }}</a>
			<time>{{ item.time_ago }}</time> by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
		</li>
	</ul>
</template>

<script>

export default {
	created() {
		this.$store.dispatch('FETCH_NEWS');
	}

}
</script>

<style>

</style>