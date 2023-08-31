<template>
  <div>
	<ul class="list">
		<li v-for="item in listItems" v-bind:key="item" class="post">
			<!-- 포인트 영역 -->
			<span class="points">{{ item.points || 0 }}</span>
			<!-- 기타 정보 영역 -->
			<span>
				<!-- 타이틀 영역 -->
				<template v-if="item.domain">
					<a :href="item.url" class="tit-news">{{ item.title }}</a>
				</template>
				<template v-else>
					<router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
				</template>
				<time>{{ item.time_ago }}</time> by
				<router-link
					v-if="item.user"
					v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
				<a :href="item.url" v-else>{{ item.domain }}</a>
			</span>
		</li>
	</ul>
  </div>
</template>

<script>
export default {
	// created() {
	// 	const name = this.$route.name;
	// 	if(name === 'news') {
	// 		this.$store.dispatch('FETCH_NEWS');
	// 	} else if (name === 'ask') {
	// 		this.$store.dispatch('FETCH_ASK');
	// 	} else if (name === 'jobs') {
	// 		this.$store.dispatch('FETCH_JOBS');
	// 	}
	// },
	computed: {
		listItems() {
			return this.$store.state.list;
		}
	}
}
</script>

<style scoped>
.points	{display: inline-block;width: 50px;margin-right: 10px;border-radius: 30px;background-color: #eee;line-height: 40px;text-align: center;}
.post	{padding: 10px 0;}
</style>