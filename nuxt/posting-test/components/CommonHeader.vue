<template>
  <header class="header">
	<h1 class="logo"><NuxtLink to="/"><img src="~/assets/img/logo.png" alt="Posting Page"></NuxtLink></h1>
	<button type="button" class="btn-menu">메뉴 열기</button>
	<nav class="nav">
		<NuxtLink to="/">Main</NuxtLink>
	</nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scope lang="scss">
.header	{display: flex;
	justify-content: space-between;
	align-items:center;height:70px;padding:0 25px;
}
.logo	{width:50px;}
.nav	{display: none;}

@media screen and (min-width:1280px) {
	.header	{height: 80px;}
	.logo	{width:60px;}
	.btn-menu	{display: none;}
}
</style>