<center>
	<br>
	<p>about me</p>
</center>
<script type="text/javascript">
	import {onMount} from 'svelte'
	import {isLoading} from '@/store'
	onMount(() => {
		$isLoading = true
		setTimeout(() => {
			$isLoading = false
		}, 3000)
	})
</script>