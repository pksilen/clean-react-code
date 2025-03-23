import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

const reactCompilerConfig = {};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", reactCompilerConfig],
        ],
      },
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
