<template>
  <div class="search">
		<input type="text" @input="emit('serchKeywordFunc', $event.target.value)">
		<button type="button" @click="emit('search')">Search</button>
	</div>
</template>

<script setup>
import { defineEmits } from "vue";

// const props = defineProps({
// 	searchKeyword: {
// 		type: String,
// 		default: () => '',
// 	}
// });

const emit = defineEmits(['serchKeywordFunc', 'search']);

</script>

<style>

</style>