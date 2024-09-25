import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/jason-whitby-3d-cv-adventure",
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
