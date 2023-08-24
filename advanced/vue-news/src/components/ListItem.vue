<template>
  <div>
	<ul class="list">
		<li v-for="item in this.$store.state.news" v-bind:key="item" class="post">
			<!-- 포인트 영역 -->
			<span class="points">{{ item.points }}</span>
			<!-- 기타 정보 영역 -->
			<span>
				<a :href="item.url" class="tit-news">{{ item.title }}</a>
				<time>{{ item.time_ago }}</time>
				by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
			</span>
		</li>
	</ul>
  </div>
</template>

<script>
export default {
	created() {
		// this.$store.dispatch('FETCH_NEWS');
		console.log(this.$route.path === '/news');
		const name = this.$route.name;
		if(name === 'news') {
			this.$store.dispatch('FETCH_NEWS');
		} else if (name === 'ask') {
			this.$store.dispatch('FETCH_ASK');
		} else if (name === 'jobs') {
			this.$store.dispatch('FETCH_JOBS');
		}
	},
	computed: {
		
	}
}
</script>

<style scoped>
.points	{display: inline-block;width: 50px;margin-right: 10px;border-radius: 30px;background-color: #eee;line-height: 40px;text-align: center;}
.post	{padding: 10px 0;}
</style>