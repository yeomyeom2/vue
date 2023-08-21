<template>
	<ul>
		<li v-for="job in this.$store.state.jobs" v-bind:key="job">
			<a :href="job.url">{{ job.title }}</a>
			<time>{{ job.time_ago }}</time> <span>{{ job.domain }}</span>
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

<style>

</style>