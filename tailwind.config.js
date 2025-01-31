/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3983CD',
        button: {
          default: '#3983CD',
          hover: '#469cf1',
        },
      },
    },
  },
  plugins: [],
};
