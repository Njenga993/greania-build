import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/greania-build/',
  build: {
    outDir: 'build'
  }
})
