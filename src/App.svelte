<script>
  import Router from "svelte-spa-router";
  // @ts-ignore
  import routes from "virtual:generated-pages-svelte";
  import "@unocss/reset/tailwind.css";
  import "uno.css";
</script>

<Router {routes} />

<style>
  :global(*) {
    word-wrap: break-word;
  }
  /* chrome extension */
  /* :global(body) {
    width: 350px;
  } */
</style>
