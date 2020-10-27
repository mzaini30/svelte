<script type="text/javascript">
	export let data
	/*
	data = [
		{nama: 'Zen', alamat: 'Samarinda', kelas: 2},
		{nama: 'Yani', alamat: 'Balikpapan', kelas: 1},
		{nama: 'Maryam', alamat: 'Tenggarong', kelas: 3}
	]
	*/
	let kolom = []
	for (let n in data[0]){
		kolom = [...kolom, n]
	}
	// kolom: [nama, alamat, kelas]
</script>
<div class="table-responsive">
	<table class="table table-bordered">
		<thead>
			<tr>
				{#each kolom as x}
					<th>{x}</th>
				{/each}
			</tr>
		</thead>	
		<tbody>
			{#each data as x}
				<tr>
					{#each kolom as y}
						<td>{x[y]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<br>