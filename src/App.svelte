<script>
  import Router from "svelte-spa-router";
  // @ts-ignore
  import routes from "virtual:generated-pages-svelte";
  import "@unocss/reset/tailwind.css";
  import "warna-tailwind/warna.css";
  import "./App.css";
</script>

<Router {routes} />
