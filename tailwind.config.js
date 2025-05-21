/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // quan trọng với Vite
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '890px',
  
        'laptop': '1025px',
  
        'desktop': '1280px',
      }
    },
  },
  plugins: [],
};