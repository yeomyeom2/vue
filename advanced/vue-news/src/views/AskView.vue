<template>
	<ul>
		<li v-for="item in fetchedAsk" v-bind:key="item">
			<a :href="item.url">{{ item.title }}</a>
			<time>{{ item.time_ago }}</time> <span>{{ item.user }}</span>
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