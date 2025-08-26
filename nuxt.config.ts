import mkcert from 'vite-plugin-mkcert'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vite-pwa/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Poppins: [400, 700],
    }
  },
  pwa: {
    manifest: {
      name: 'Gold Star Leaders',
      short_name: 'Gold Star',
      description: 'A leaderboard application for Gold Star achievers.',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  vite: {
    plugins: [
      mkcert()
    ]
  },
  devServer: {
    https: true
  }
})
