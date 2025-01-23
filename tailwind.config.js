/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#388bde',
        button: {
          default: '#388bde',
          hover: '#469cf1',
        },
      },
    },
  },
  plugins: [],
};
