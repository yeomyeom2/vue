<template>
	<div>
		<section>
			<!-- 질문 상세 정보 -->
			<div class="user-container">
				<div>User</div>
				<div class="user-desc">
					<router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
					<div class="time">{{ fetchedItem.time_ago }}</div>
				</div>
			</div>
			<strong>{{ fetchedItem.title }}</strong>
		</section>
		<section>
			<!-- 질문 댓글 -->
			<div v-html="fetchedItem.content"></div>
		</section>
		<!-- <div>{{ fetchedItem.title }}</div>
		<div>{{ fetchedItem.content }}</div> -->
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
.user-container	{
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 20px;
}
.time	{
	opacity: 0.5;
}
</style>