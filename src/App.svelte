{#if $isLoading}
	<Loading/>
{/if}
<Router {routes}/>
<script type="text/javascript">
	import Router from 'svelte-spa-router'
	import { wrap } from 'svelte-spa-router/wrap'
	import Loading from '@/Loading.svelte'
	import {isLoading} from '@/store'
	const routes = {
		'/': wrap({asyncComponent: () => import('@/halaman/Beranda.svelte')}),
		'/about-me': wrap({asyncComponent: () => import('@/halaman/AboutMe.svelte')})
	}
</script>
