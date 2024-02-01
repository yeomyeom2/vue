import { defineStore } from 'pinia'

export const mediaqueryStore = defineStore('mediaquery', () => {
	let isMobile = ref(true);

	return { isMobile }
})