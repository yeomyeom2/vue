<template>
  	<div class="wrap" :class="{'mode-dark': !store.modeLight}">
		<CommonHeader />
		<slot />
		<CommonFooter />
	</div>
</template>

<script setup>
import { modeStore } from '../stores/mode'
const store = modeStore();
</script>

<style>

</style>