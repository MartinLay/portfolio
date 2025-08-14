import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ganti 'my-portfolio' dengan nama repository kamu
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
