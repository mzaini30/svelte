# Instalasi

```bash
npx degit mzaini30/svelte my-project
cd my-project
npm i
```

# Struktur folder

| Keterangan | Folder |
|---|---|
| File Svelte | src/pages |
| Static files | public |
| Output | hasil |

# Fitur

## Code splitting

Cukup jalankan 

```bash
npm run build
```

## Router berbasis file

Kita menggunakan Routify.

## Hot module reload

Dia nggak mereset state saat kita development. Cukup jalankan:

```bash
npm run dev
```

## Tailwind CSS

Settingnya ada di `tailwind.config.js`.

## Icon

Menggunakan Remix Icon.

## Purge CSS

Saat mode production (build), rules css yang nggak digunakan akan terhapus dengan sendirinya sehingga menghemat ukuran file css. Untuk settingnya, bisa dibuka `script/pakaiPurge.js`.

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
	<meta property="og:image" content="/dist/favicon.png">
	<link rel='icon' type='image/png' href='/dist/favicon.png'>

	<link rel='stylesheet' href='/dist/bootstrap.min.css'>
	<link rel='stylesheet' href='/dist/global.css'>
	<link rel='stylesheet' href='/build/bundle.css'>
	<script defer src='/main.js' type="module"></script>
</head>
<body>
</body>
</html>
```

Nanti tinggal disesuaikan aja tag title, meta description, dan og image.

## Loader

Cara menggunakan:

```javascript
import {isLoading} from '@/store'
$isLoading = true // untuk mengaktifkan loader
$isLoading = false // untuk mematikan loader
```

Itu harus diletakkan di dalam folder `halaman`.

## Absolute path

Contoh:

```javascript
import {nama} from '@/data/nama'
```

Tapi, bisa juga relative path seperti:

```javascript
import {nama} from '../../../nama'
```

## Tanggal

Mendapatkan tanggal terkini dengan format 2020-08-17 00:19:45

Caranya:

```html
<script>
	import {tanggal} from '@/tools/tanggal'
</script>
<p>{tanggal()}</p>
```

## Slug

Mendapatkan slug dari string

Caranya:

```html
<script>
	import {slug} from '@/tools/slug'
</script>
<p>{slug('hello world')}</p>
<!-- jadinya: hello-world -->
```

## Acak

Digunakan untuk mengacak array

Caranya:

```javascript
import {acak} from "@/tools/acak"
let angka = [1, 2, 3, 4, 5]
angka = acak(angka)
```

## Datatable (on progress)

```html
<script type="text/javascript">
	import Datatable from '@/tools/Datatable.svelte'
	let data = [
		{nama: 'Zen', alamat: 'Samarinda', kelas: 2},
		{nama: 'Yani', alamat: 'Balikpapan', kelas: 1},
		{nama: 'Maryam', alamat: 'Tenggarong', kelas: 3}
	]
</script>
<Datatable {data}/>
```

# Terjemahan?

Boleh. Misalnya aja mau nerjemahkan ke bahasa Jepang, maka buat file `README-jp.md` yang berisi terjemahan README ini dalam bahasa Jepang.
