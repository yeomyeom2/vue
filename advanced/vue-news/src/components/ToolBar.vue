<template>
	<nav class="nav">
		<router-link to="/news">News</router-link>
		<router-link to="/ask">Ask</router-link>
		<router-link to="/jobs">Jobs</router-link>
	</nav>
</template>

<script>
export default {

}
</script>

<style scope>
.nav	{
	padding: 20px 0;
	background-color:rgba(0,0,0,.7);
	color:#fff;
	text-align: center;
	
}
.nav a	{margin: 0 20px;color: inherit;font-size: 20px;text-decoration: none;}
.nav .router-link-active	{border-bottom: 3px solid #e50c34;}
</style>