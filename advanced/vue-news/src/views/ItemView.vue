<template>
	<div>
		<section>
			<!-- 사용자 상세 정보 -->
			<UserProfile :info="fetchedItem">
				<router-link slot="username" :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
				<template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
			</UserProfile>
		</section>
		<section>
			<strong>{{ fetchedItem.title }}</strong>
		</section>
		<section>
			<!-- 질문 댓글 -->
			<div v-html="fetchedItem.content"></div>
		</section>
	</div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
	components: {
		UserProfile,
	},
	computed: {
		...mapGetters(['fetchedItem']),
	},
	created() {
		const itemId = this.$route.params.id;
		// console.log(itemId);
		this.$store.dispatch('FETCH_ITEM', itemId)
	}
}
</script>

<style scoped>

</style>