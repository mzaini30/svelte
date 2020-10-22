fs = require('fs')
btoa = require('btoa')
lokasiFile = 'public/build/bundle.js'
fs.readFile(lokasiFile, 'utf8', (_, x) => {
	x = x.replace(/['"]http.*?['"]/g, x => {
		return `eval(atob('${btoa(x)}'))`
	}).replace(/\[\[.*?\]\]/g, x => {
		return `eval(atob('${btoa(x)}'))`
	}).replace(/\[['"].*?['"]\]/g, x => {
		return `eval(atob('${btoa(x)}'))`
	})
	// console.log(x)
	fs.writeFile(lokasiFile, x, 'utf8', () => {})
})