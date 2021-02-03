# Svelte

## Instalasi

```bash
npx degit mzaini30/svelte hello-world
cd hello-world
npm i --prefer-offline
```

## Mode Dev

Menggunakan Snowpack

```bash
npm run dev
```

## Build

```bash
npm run build
```

Hasilnya di folder `build`

## Sudah Ada Bootstrap

Letaknya di `src/pages/_layout.svelte`

## Menggunakan Routify

Semua halaman ada di `src/pages`

| File | Route |
|---|---|
| `index.svelte` | `situs.com` |
| `hello.svelte` | `situs.com/hello` |
| `[slug].svelte` | `situs.com/judulnya` |

## Tools Siap Pakai

```javascript
const tools = require('tools')
console.log()

// acak
const angka = [...Array(10).keys()]
const acak = tools.acak(angka)
console.log('Angka diacak:')
console.log(acak)
console.log()

// slug
const judul = 'Aku mau makan nasi. Kamu mau ikut kah?'
console.log(`Judul: ${judul}`)
console.log(`Slug: ${tools.slug(judul)}`)
console.log()

// tanggal
console.log(`Tanggal sekarang: ${tools.tanggal()}`)

console.log()
```

## Embed Youtube

```javascript
const yt = require("embed-youtube")
const teks = `
Ini videonya:

{{ youtube ygH68h }}

Bagus kan?
`
console.log(yt(teks))
```
