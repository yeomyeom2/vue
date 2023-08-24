<template>
	<!-- <ul class="list">
		<li v-for="item in fetchedAsk" v-bind:key="item" class="post">
			<span class="points">{{ item.points }}</span>
			<span>
				<router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
				<time>{{ item.time_ago }}</time>
				by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
			</span>
		</li>
	</ul> -->
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