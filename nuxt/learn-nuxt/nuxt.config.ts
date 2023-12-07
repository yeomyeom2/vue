// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
	port: 4000,
  },
  app: {
	head: {
		title: 'Nuxt Shopping',
		htmlAttrs: {
			lang: 'ko'
		},
		charset: 'utf-8',
      	viewport: 'width=device-width, initial-scale=1',
		meta: [
			{ name: 'description', content: 'Hey~'}
		]
	}
  },
  css: ['~/assets/css/reset.css'],
  modules: [
	'@pinia/nuxt',
  ],
  pinia: {
	storesDirs: ['./stores/**']
  },
})
