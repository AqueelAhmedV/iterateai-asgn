import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { esbuildPluginBabel } from 'vite-plugin-babel'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    esbuildPluginBabel()
  ],
})
