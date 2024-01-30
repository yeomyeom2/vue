<template>
  <header class="header">
	<h1 class="logo"><NuxtLink to="/"><img src="~/assets/img/logo.png" alt="Posting Page"></NuxtLink></h1>
	<button type="button" class="btn-menu" :class="{on: showMenu}" @click="showMenu = !showMenu"><span class="hide">메뉴 열기</span></button>
	<div class="wrap-menu">
		<nav class="nav">
			<NuxtLink to="/">Main</NuxtLink>
			<NuxtLink to="/">Main</NuxtLink>
			<NuxtLink to="/">Main</NuxtLink>
		</nav>
		<CommonMode></CommonMode>
	</div>
  </header>
</template>

<script setup>
let showMenu = ref(false);
</script>

<style scoped lang="scss">
@import '~/assets/css/_var.scss';

$headerH: 70px;
.header	{
	display: flex;
	justify-content: space-between;
	align-items:center;
	height:$headerH;
	padding:0 25px;
}
.logo	{width:50px;}
.btn-menu	{
	position: relative;
	width: 34px;
	height: 34px;
	margin-right: -9px;
	@mixin line($top)	{
		position: absolute;
		left: 9px;
		top: $top;
		display: block;
		width: 16px;
		height: 2px;
		background-color: $color-navy;
		transition: top .2s,transform .2s;
		content: "";
	}
	&::before	{
		@include line(12px);
	}
	&::after	{
		@include line(20px);
	}
	&.on	{
		&::before	{
			top: 50%;
			transform: rotate(45deg);
		}
		&::after	{
			top: 50%;
			transform: rotate(-45deg);
		}
	}
}
.wrap-menu	{
	position: fixed;
	left: 0;
	top: $headerH;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;
	height: calc(100% - $headerH);
	padding: 0 25px;
	background-color: rgba(#fff, 0.85);
	text-align: right;
	transform:translateX(100%);
	transition: transform .2s;
	z-index: 1;
	box-sizing: border-box;
	a 	{
		display: block;
		padding: 1rem 0;
		color: $color-navy;
		font-size: 2rem;
	}
}
.btn-menu.on + .wrap-menu	{
	transform:translateX(0);
}
.nav	{width: 100%;}


.mode-dark	{$color-navy: #fff;
}

@media screen and (min-width:$view-pc) {
	.header	{height: 80px;}
	.logo	{width:60px;}
	.btn-menu	{display: none;}
}
</style>