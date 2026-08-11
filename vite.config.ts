import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ఇది చాలా ముఖ్యం: మీ GitHub Repository పేరు ఇక్కడ కరెక్ట్ గా ఉండాలి
  base: '/Ganesh-Portfolio-website/', 
})