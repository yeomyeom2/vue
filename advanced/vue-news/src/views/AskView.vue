<template>
	<ul>
		<li v-for="item in fetchedAsk" v-bind:key="item">
			<router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
			<time>{{ item.time_ago }}</time> by <span>{{ item.user }}</span>
		</li>
	</ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters([
			'fetchedAsk'
		]),

		// #2
		// ...mapState({
		// 	ask: state => state.ask
		// }),

		// #1
		// ask() {
		// 	return this.$store.state;
		// }
	},
	created() {
		this.$store.dispatch('FETCH_ASK');
	}
}
</script>

<style>

</style>