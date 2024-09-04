/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#ebceeb',
      },
      fontFamily: {
        parisienne: ['Parisienne', 'cursive'],
      },
      textShadow: {
        '3xl': '3px 3px 0px rgba(234, 192, 230, 0.3)',
      }
    },
  },
  plugins: [],
}

