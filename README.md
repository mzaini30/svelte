# Instalasi

```bash
npx degit mzaini30/svelte my-project
cd my-project
npm i
```

# Fitur

## Router hash

Bisa dilihat di `src/App.svelte`:

```html
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
```

Jadi, untuk `/`, dia akan menjalankan `src/halaman/Beranda.svelte`.

## Hot module reload

Dia nggak mereset state saat kita developement. Cukup jalankan:

```bash
npm run dev
```

## Enkripsi

Cara menjalankan:

```bash
npm run build
node encrypt.js
```

Dia akan mengubah data seperti berikut:

```javascript
nama = [
	['Zen', 'Maryam']
]
// menjadi: nama = eval(atob("W1siWmVuIiwiTWFyeWFtIl1d"))

nama = 'https://zen.com'
// menjadi: nama = eval(atob("Imh0dHBzOi8vemVuLmNvbSI="))

nama = ['Ayam', 'Bebek', 'Cicak']
// menjadi: nama = eval(atob("WyJBeWFtIiwiQmViZWsiLCJDaWNhayJd"))
```

## Github action

Pas push ke Github, dia akan otomatis menjalankan Github action untuk mendeploy Svelte dan menjalankan `encrypt.js`.

## Bootstrap

Udah ada Bootstrap. Tinggal pakai aja.

## SEO

Ini isi dari `public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title></title>
	<meta name="description" content="">
	<meta property="og:image" content="favicon.png">

	<link rel='icon' type='image/png' href='favicon.png'>
	<link rel='stylesheet' href='bootstrap.min.css'>
	<link rel='stylesheet' href='global.css'>
	<link rel='stylesheet' href='build/bundle.css'>

	<script defer src='build/bundle.js'></script>
</head>

<body>
</body>
</html>
```

Nanti tinggal disesuaikan aja tag title, meta description, dan og image.

## Loader

Cara menggunakan:

```javascript
import {isLoading} from '@/store.js'
$isLoading = true // untuk mengaktifkan loader
$isLoading = false // untuk mematikan loader
```

Itu harus diletakkan di dalam folder `halaman`.

## Absolute path

Contoh:

```javascript
import {nama} from '@/data/nama.js'
```

Tapi, bisa juga relative path seperti:

```javascript
import {nama} from '../../../nama.js'
```

## Tanggal

Mendapatkan tanggal terkini dengan format yyyy-m-d h:m:s

Caranya:

```html
<script>
	import {tanggal} from '@/tanggal.js'
</script>
<p>{tanggal()}</p>
```

# Terjemahan?

Boleh. Misalnya aja mau nerjemahkan ke bahasa Jepang, maka buat file `README-jp.md` yang berisi terjemahan README ini dalam bahasa Jepang.