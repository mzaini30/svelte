<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import {isLoading} from '@/store'
  import Loading from '@/Loading.svelte'
  let vh = 0
  const tinggiFull = () => {
  	vh = window.innerHeight * 0.01
  	document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
  tinggiFull()
  window.addEventListener("resize", tinggiFull)
</script>
{#if $isLoading}
	<Loading/>
{/if}
<Router {routes}/>
