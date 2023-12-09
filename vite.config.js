import { defineConfig } from 'vitest/dist/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { // Vitest config
    environment: 'happy-dom' // Emulates a web browser for testing purposes
  }
})
