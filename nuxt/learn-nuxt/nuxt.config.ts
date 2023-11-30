// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
	port: 4000,
  },
  css: ['~/assets/css/reset.css'],
  modules: [
	'@pinia/nuxt',
  ],
  pinia: {
	storesDirs: ['./stores/**']
  },
})
