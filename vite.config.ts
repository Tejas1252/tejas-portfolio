import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` is set for the GitHub Pages project site:
// https://tejas1252.github.io/tejas-portfolio/
export default defineConfig({
  base: '/tejas-portfolio/',
  plugins: [react()],
})
