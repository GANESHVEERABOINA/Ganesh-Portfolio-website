/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFC107', // Yellow Accent
          dark: '#000000',   // Pure Black Background
          card: '#0a0a0a',   // Very dark gray for cards
          gray: '#9CA3AF'    // Gray for descriptions
        }
      }
    },
  },
  plugins: [],
}