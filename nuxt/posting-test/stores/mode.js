import { defineStore } from 'pinia'

export const modeStore = defineStore('mode', () => {
	let modeLight = ref(true);

	return { modeLight }
})