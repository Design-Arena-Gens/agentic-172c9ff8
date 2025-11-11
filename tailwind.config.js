/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FFF8F0',
        brown: {
          50: '#FDF8F6',
          100: '#F2E8E5',
          200: '#EAD8D1',
          300: '#D4B5A8',
          400: '#C09580',
          500: '#A67C5C',
          600: '#8B6446',
          700: '#6F4E37',
          800: '#5A3E2C',
          900: '#3E2A1F',
        },
      },
    },
  },
  plugins: [],
}
