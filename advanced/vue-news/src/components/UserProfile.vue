<template>
  <div class="user-container">
		<div>User</div>
		<div class="user-desc">
			<slot name="username">
				<!-- 상위 컴포넌트에서 정의할 영역 -->
			</slot>
			<div class="time">
				<!-- time: {{ info.created }} -->
				<slot name="time">
					<!-- 상위 컴포넌트에서 정의할 영역 -->
				</slot>
				<slot name="karma">
					<!-- 상위 컴포넌트에서 정의할 영역 -->
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		info: Object
	},
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