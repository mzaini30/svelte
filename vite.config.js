import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import { VitePWA } from 'vite-plugin-pwa'

const namaAplikasi = 'Svelte Vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      filename: 'sw.ts',
      srcDir: 'src',
      manifest: {
        display: 'minimal-ui',
        name: namaAplikasi,
        short_name: namaAplikasi,
        icons: [
          {
            src: "/logo.png",
            sizes: "892x892",
            type: "image/png"
          }
        ],
        lang: 'id'
      }
    }),
	  svelte({
	  	preprocess: preprocess()
	  }),
  ],
  optimizeDeps: {
      exclude: [
          '@roxi/routify',
          'svelte-notifications'
      ]
  }
})
