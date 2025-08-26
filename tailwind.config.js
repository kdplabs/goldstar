/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#222222',
        'text-secondary': '#555555',
        'accent': '#8B5CF6',
        'accent-dark': '#7C3AED',
        'btn-gradient-from': '#F472B6',
        'btn-gradient-to': '#F97316',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
