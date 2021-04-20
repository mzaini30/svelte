import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import { VitePWA } from 'vite-plugin-pwa'

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
