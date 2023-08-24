<template>
	<ul class="list">
		<li v-for="job in this.$store.state.jobs" v-bind:key="job" class="post">
			<!-- 포인트 영역 -->
			<span class="points">{{ job.points || 0 }}</span>
			<!-- 기타 정보 영역 -->
			<span>
				<a :href="job.url" class="tit-news">{{ job.title }}</a>
				<time>{{ job.time_ago }}</time>
				by <a :href="job.url">{{ job.domain }}</a>
			</span>
		</li>
	</ul>
</template>

<script>

export default {
	created() {
		this.$store.dispatch('FETCH_JOBS');
	}
}
</script>

<style scoped>
.points	{display: inline-block;width: 50px;margin-right: 10px;border-radius: 30px;background-color: #eee;line-height: 40px;text-align: center;}
.post	{padding: 10px 0;}
</style>