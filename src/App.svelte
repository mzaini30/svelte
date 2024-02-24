<script context="module">
  import { Router, createRouter } from '@roxi/routify'
  import routes from '../.routify/routes.default.js'
  import data from '../android.json'
  import Gerbang from './lib/kunci/src/Gerbang.svelte'

  export const router = createRouter({
    routes,
    urlRewrite: {
      toExternal: (url) => `#${url}/`, // prepend URLs with #/
      toInternal: (url) => url.replace(/^.+#\//, ''), // remove leading #/
    },
  })
</script>

<Gerbang namaAplikasi={data.title}>
  <Router {router} />
</Gerbang>
