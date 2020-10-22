{#if $isLoading}
	<Loading/>
{/if}
<Router {routes}/>
<script type="text/javascript">
	import Router from 'svelte-spa-router'
	import Beranda from '@/halaman/Beranda.svelte'
	import Loading from '@/Loading.svelte'
	import {isLoading} from '@/store.js'
	const routes = {
		'/': Beranda
	}
</script>
