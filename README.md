# Template Svelte Olahanku

Oh iya, buat yang belum paham cara pakai Svelte, kunjungi dulu tutorialnya ya di https://svelte.dev/tutorial/basics

## Instalasi

```bash
npm init svelte-zen
npm i
```

## Struktur Folder

| Keterangan | Folder |
|---|---|
| File Svelte | src/pages |
| Static files | public/dist |
| Output | public |

Hindari meletakkan file berekstensi .js, .css, dan .css.map di public. Letakkan di public/dist. Soalnya, ekstensi-ekstensi tersebut masuk di .gitignore.

## Fitur

### CSS

Menggunakan Bootstrap.

Untuk menonaktifkannya, hapus aja Bootstrapnya di `src/App.svelte`.

### Bisa Menggunakan SASS

Tutorial SASS di Web Programming Unpas: https://youtube.com/playlist?list=PLFIM0718LjIUqemgG97MAOK0J_berlQM5

Contoh:

```html
<div class="container pt-3">
	<h1>Hello World</h1>
</div>

<style type="text/scss">
	$warna: red;
	$ukuran: 100px;
	h1 {
		color: $warna;
		font-size: $ukuran;
	}
</style>
```

### Bisa Juga Dibuat Global Stylenya

Contoh:

```html
<style type="text/scss" global>
	p {
		color: green;
		strong {
			text-transform: uppercase;
		}
	}
</style>
```

### Bisa Menggabungkan Global Style dan Scoped

Contoh: 

```html
<style type="text/scss">
	:global {
		p {
			color: green;
			strong {
				text-transform: uppercase;
			}
		}
		a {
			color: red;
		}
	}
	h1 {
		text-align: center;
	}
</style>
```

### Bisa Menggunakan Markdown

Contoh:

`index.md`

```markdown
<div class="container my-3">
	# Hello {nama}

	Ini di mana ya?
</div>

<script type="text/javascript">
	const nama = 'Zen'
</script>

<style type="text/css" lang="scss">
	.container {
		color: green;
		h1 {
			color: red;
		}
	}
</style>
```

### Code Splitting

Cukup jalankan 

```bash
npm run build
```

### Router Berbasis File

Kita menggunakan Routify. Ini tutorialnya: https://routify.dev/guide/introduction/getting-started

### Hot Module Replacement

Dia nggak mereset state saat kita development. Cukup jalankan:

```bash
npm run dev
```

### SEO

Ini isi dari `public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title>Svelte Template</title>
	<meta name="description" content="Template Svelte yang diolah oleh Zen">
	<meta property="og:image" content="/dist/jean.jpg">
	<link rel='icon' type='image/png' href='/dist/ungu.png'>
	
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@blogodop">
	<meta name="twitter:creator" content="@blogodop">
	<meta name="twitter:title" content="Svelte Template">
	<meta name="twitter:description" content="Template Svelte yang diolah oleh Zen">
	<meta name="twitter:image" content="https://mzaini30.js.org/dist/jean.jpg">

	<script defer src='/main.js' type="module"></script>
</head>
<body>
</body>
</html>


```

Nanti tinggal disesuaikan aja tag title, meta description, dan og image.

### Absolute Path

Contoh:

```javascript
import {nama} from '@/data/nama'
```

Tapi, bisa juga relative path seperti:

```javascript
import {nama} from '../../../nama'
```

### Berbagai Tools Siap Pakai

Untuk detailnya, kunjungi https://www.npmjs.com/package/kumpulan-tools

## Terjemahan?

Boleh. Misalnya aja mau nerjemahkan ke bahasa Jepang, maka buat file `README-jp.md` yang berisi terjemahan README ini dalam bahasa Jepang.
