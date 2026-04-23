import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import EsJS from '@es-js/vite-plugin-esjs'
import { vavite } from "vavite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/es-js/esjs
    EsJS(),

    // https://github.com/cyco130/vavite
    vavite({
      serverEntry: './src/app.esjs',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [
      '.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.esjs',
    ],
  },
  build: {
    ssr: true,
    outDir: './dist',
    lib: {
      entry: './src/app.esjs',
      name: 'AppServer',
      fileName: 'server',
      formats: ['cjs']  // ← COMMONJS para .exe!
    },
    rollupOptions: {
      external: []  // Incluye todo
    },
    minify: false,
    target: 'node18'
  },
  // Desarrollo normal
  server: {
    port: 4500
  }
})