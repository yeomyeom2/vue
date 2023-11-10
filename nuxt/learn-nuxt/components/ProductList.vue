<template>
  <div>
	{{ product }}
  </div>
</template>

<script setup>
const product = await $fetch('http://localhost:3000/products').catch((error) => error.data);
</script>

<style>

</style>