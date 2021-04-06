import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
	  svelte({
	  	preprocess: [
	  		preprocess(),
	  		require('svelte-windicss-preprocess').preprocess()
	  	]
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
