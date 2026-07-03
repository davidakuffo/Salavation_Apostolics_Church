/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', // blue-700
        secondary: '#ef4444', // red-500
      },
    },
  },
  plugins: [],
}
