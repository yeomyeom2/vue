<template>
	<div>
		<ListItem></ListItem>
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import { mapGetters } from 'vuex';

export default {
	// computed: {
	// 	...mapGetters([
	// 		'fetchedAsk'
	// 	]),

	// 	// #2
	// 	// ...mapState({
	// 	// 	ask: state => state.ask
	// 	// }),

	// 	// #1
	// 	// ask() {
	// 	// 	return this.$store.state;
	// 	// }
	// },
	// created() {
	// 	this.$store.dispatch('FETCH_ASK');
	// },

	components: {
		ListItem,
	}
}
</script>

<style scoped>
</style>