<script type="text/javascript">
	export let data // pusat
	let data2 = [...data] // yang diolah di sini
	/*
	data = [
		{nama: 'Zen', alamat: 'Samarinda', kelas: 2},
		{nama: 'Yani', alamat: 'Balikpapan', kelas: 1},
		{nama: 'Maryam', alamat: 'Tenggarong', kelas: 3}
	]
	*/
	let kolom = []
	for (let n in data2[0]){
		kolom = [...kolom, n]
	}
	// kolom: [nama, alamat, kelas]
	for (let n in data2){
		for (let o in kolom){
			data2[n][kolom[o]] == undefined ? data2[n][kolom[o]] = '' : ''
		}
	}
</script>
<div class="form-group">
	<div class="btn btn-light">5</div>
	<div class="btn btn-light">10</div>
	<div class="btn btn-light">25</div>
	<div class="btn btn-light">50</div>
</div>
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
			{#each data2 as x}
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