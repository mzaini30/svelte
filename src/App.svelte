<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "../.routify/routes";
  import {isLoading} from '@/store'
  import Loading from '@/tools/Loading.svelte'
</script>
{#if $isLoading}
	<Loading/>
{/if}
<Router {routes} />
<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;  
</style>
