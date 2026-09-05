import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Github Pages ki mariyu Docker Nginx ki rendu chotla work ayye single relative path!
  base: './', 
})
