import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
	  svelte({
	  	preprocess: preprocess()
	  }),
	  require('vite-plugin-windicss').default()
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
