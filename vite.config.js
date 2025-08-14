import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // penting: sesuai nama repo GitHub
  build: {
    outDir: 'dist', // folder output
  },
})
