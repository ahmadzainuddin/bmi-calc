import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ubah base bila deploy ke GitHub Pages, contoh:
  base: '/bmi-calc/'
})