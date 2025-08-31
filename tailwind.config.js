/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-secondary': '#1a1a1a',
        'accent': '#14b8a6',
        'accent-light': '#2dd4bf'
      }
    },
  },
  plugins: [],
}
