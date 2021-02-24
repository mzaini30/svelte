<script>
	import { Router } from "@roxi/routify";
	import { routes } from "../.routify/routes";
	let vh = 0
	const tinggiFull = () => {
		vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty("--vh", `${vh}px`)
	}
	tinggiFull()
	window.addEventListener("resize", tinggiFull)
</script>

<Router {routes}/>

<svelte:head>
	<link rel='stylesheet' href='/dist/bootstrap.min.css'>
</svelte:head>

<style type="text/scss">
	:global {
		* {
			word-wrap: break-word;
		}
		.h-screen {
			height: 100vh;
			height: calc(var(--vh, 1vh) * 100);
		}
		.min-h-screen {
			min-height: 100vh;
			min-height: calc(var(--vh, 1vh) * 100);
		}
		img {
			max-width: 100%;
			height: auto;
		}
	}
</style>