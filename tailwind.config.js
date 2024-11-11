import fluid, { extract } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content:{ 
    files:["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extract},
  theme: {
    extend: {},
  },
  plugins: [
    fluid
  ],
};

