/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        'name-time-label': 'rgba(255, 255, 255, 0.6)'
      }
    }
  },
  plugins: []
}
