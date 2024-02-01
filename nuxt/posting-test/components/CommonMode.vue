<template>
  <button type="button"
	class="btn-mode"
	@click="storeMode.modeLight = !storeMode.modeLight">
		<span class="hide">
			<span v-if="storeMode.modeLight">Dark</span>
			<span v-if="!storeMode.modeLight">Light</span>
			모드로 변경
		</span>
	</button>
</template>

<script setup>
const storeMode = modeStore();
</script>

<style scoped lang="scss">
button	{
	position: relative;
	display: block;
	width: 48px;
	height: 26px;
	border-radius: 20px;
	background-color: #ccc;
    background-image: none;

	&::after	{
		display: block;
		position: absolute;
		left: 4px;
		top: 50%;
		width: 18px;
		height: 18px;
		margin-top: -9px;
		border-radius: 50%;
		background-color: #fff;
		content: "";
		transition: transform .3s;
	}
}

.mode-dark button	{
    background-image: linear-gradient(to right, #00d6f3, #6d3eff);

	&::after	{
		transform: translateX(22px);
	}
}

@media screen and (min-width: $view-pc) {
	button	{display: none;}
}
</style>