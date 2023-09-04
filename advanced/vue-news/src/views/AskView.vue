<template>
	<div>
		<ListItem></ListItem>
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
// import { mapGetters } from 'vuex';
import ListMixin from '../mixins/ListMixin.js';

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
	},
	mixins: [ListMixin],
	// created() {
	// 	bus.$emit('start:spinner');
	// 	setTimeout(() => {
	// 		this.$store.dispatch('FETCH_ASK')
	// 			.then(() => {
	// 				console.log('fetched');
	// 				bus.$emit('end:spinner');
	// 			})
	// 			.catch(error => {
	// 				console.log(error);
	// 			});
	// 	}, 3000);
	// },
}
</script>

<style scoped>
</style>