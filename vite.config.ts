import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Don't use `@rollup/plugin-eslint`. Because occur the issue (https://github.com/rollup/plugins/issues/608)
import viteESLint from '@ehutch79/vite-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteESLint(),
  ]
})
