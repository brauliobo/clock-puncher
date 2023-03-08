import vuePugPlugin from 'vue-pug-plugin'
import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'

export default defineConfig({
  plugins: [
    pugPlugin({ pretty: true }, { name: "My Pug" }),
    vue({ template: { preprocessOptions: { plugins: [ vuePugPlugin, ], } }, }),
  ],
})
