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
    colors: {
      //default colors
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',

      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'transparent-white': 'rgba(255, 255, 255, 0.7)',
      'black': '#000000',
      'transparent-black': 'rgba(0, 0, 0, 0.7)',

      //custom colors
      'background-dark': '#0B0F19',
      'hero-dark': '#151822',
      'background-light': '#f4f0e6',

      //articles colors
      'article-time': '#6366F1',


    },
    extend: {},
  },
  plugins: [],
}

