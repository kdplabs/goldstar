// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700]
    }
  },
})
