<template>
  <div class="wrap-layer" @click="dimmedCloseFunc">
	<div class="layer">
		<div class="txt">Copied!</div>
		<button type="button" class="btn-close" @click="$emit('layerCloseEmit')"><span class="hide">팝업 닫기</span></button>
	</div>
  </div>
</template>

<script setup>
const emit = defineEmits(["layerCloseEmit"]);

const dimmedCloseFunc = e => {
	if(e.target == document.querySelector('.layer')) return;
	emit('layerCloseEmit');
}
</script>

<style lang="scss" scoped>
.wrap-layer	{
	position: fixed;
	left: 0;
	top: 0;
	display: none;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.8);
	z-index: 1;
	&.on	{display: flex;}

	.layer	{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		min-width:32rem;
		min-height: 12rem;
		padding: 40px 50px 30px;
		border-radius: 20px;
    	background-color: #fff;
		color: $color-navy;
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
	}
	.btn-close	{
		display: block;
		position: absolute;
		right: 10px;
		top: 10px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: #f6f7f9 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m10 8.704 4.537-4.537 1.296 1.296L11.296 10l4.537 4.537-1.296 1.296L10 11.296l-4.537 4.537-1.296-1.296L8.704 10 4.167 5.463l1.296-1.296z'/%3E%3C/g%3E%3C/svg%3E") 50% 50% no-repeat;
		background-size: 20px 20px;
	}
}
</style>