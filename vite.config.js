import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        display: 'minimal-ui'
      }
    }),
	  svelte({
	  	preprocess: preprocess()
	  }),
  ],
  build: {
      cssCodeSplit: false
  },
  optimizeDeps: {
      exclude: [
          '@roxi/routify',
          'svelte-notifications'
      ]
  }
})
