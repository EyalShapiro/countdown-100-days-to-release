import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const port = Number(process.env.VITE_PORT || 5175)
// https://vite.dev/config/
export default defineConfig({
  server: { port },
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Maps '@/*' to './src/*'
    },
  },
})
