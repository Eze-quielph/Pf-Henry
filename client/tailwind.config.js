/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'
export default {
  content: ['./src','node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
}

