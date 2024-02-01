<template>
  <footer class="footer">
	<div class="copyright">&copy; Yeomazing Corp.</div>
	<CommonMode></CommonMode>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.footer	{display: flex;
	justify-content: space-between;
	align-items:center;
	margin-top: auto;
	padding:25px;
	background-color: #f6f7f9;

	.btn-mode	{display: none;}
}

@media screen and (min-width: $view-pc) {
.footer	{
	.btn-mode	{display: block;}
}
}
</style>