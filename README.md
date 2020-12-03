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
| Static files | public/dist |
| Output | public |

# Fitur

## CSS

Menggunakan Bootstrap

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

## SEO

Ini isi dari `public/index.html`:

```html
<!-- 

	Website ini dibuat oleh Zen
	duniazen.com

-->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title>Svelte Template</title>
	<meta name="description" content="Template Svelte yang diolah oleh Zen">
	<meta property="og:image" content="/dist/jean.jpg">
	<link rel='icon' type='image/png' href='/dist/ungu.png'>

	<link rel='stylesheet' href='/dist/bootstrap/css/bootstrap.min.css'>
	<link rel='stylesheet' href='/bundle.css'>
	<link rel='stylesheet' href='/dist/global.css'>
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
	import {tanggal} from '@/tools'
</script>
<p>{tanggal()}</p>
```

## Slug

Mendapatkan slug dari string

Caranya:

```html
<script>
	import {slug} from '@/tools'
</script>
<p>{slug('hello world')}</p>
<!-- jadinya: hello-world -->
```

## Acak

Digunakan untuk mengacak array

Caranya:

```javascript
import {acak} from "@/tools"
let angka = [1, 2, 3, 4, 5]
angka = acak(angka)
```

# Terjemahan?

Boleh. Misalnya aja mau nerjemahkan ke bahasa Jepang, maka buat file `README-jp.md` yang berisi terjemahan README ini dalam bahasa Jepang.
