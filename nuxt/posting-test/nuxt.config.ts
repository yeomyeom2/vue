// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtModule } from 'nuxt'

export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/reset.min.css', '~/assets/css/ui.min.css'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/css/_var.scss";',
				}
			}
		}
	},
	modules: [
		'@pinia/nuxt',
		'nuxt-swiper'
	],
	// pinia: {
	// 	storesDirs: ['./stores/**']
	// },
	// swiper: {
	// 	modules: ['navigation',]
	// }
})
