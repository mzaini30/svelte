fs = require('fs')
namaFile = 'hasil/index.html'
fs.readFile(namaFile, 'utf8', (_, x) => {
	x = x.replace('/dist/bootstrap.min.css', '/dist2/bootstrap.min.css')
	fs.writeFile(namaFile, x, 'utf8', () => {})
})