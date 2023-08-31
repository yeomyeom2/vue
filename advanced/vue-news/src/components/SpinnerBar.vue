<template>
  <div class="spinner" v-if="loading">
	<div></div>
  </div>
</template>

<script>
export default {
	props: {
		loading: {
			type: Boolean,
			required: true,
		}
	}
}
</script>

<style scoped>
.spinner	{position: fixed;left: 0;top: 100px;display: flex;justify-content:center;align-items:center;width: 100%;height: 100%;background-color: rgba(255, 255, 255, 0.7);}
.spinner>div	{width: 100px;height: 100px;background-color: green;}
</style>