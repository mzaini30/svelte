fs = require('fs')
fs.readdir("public/dist", (_, x) => {
	x = x.filter(x => x.match(/\.css/g)).filter(x => x != "global.css")
	namaFile = "hasil/index.html"
	fs.readFile(namaFile, "utf8", (_, y) => {
		y = y.replace(`/dist/${x}`, `/dist2/${x}`)
		fs.readFile(namaFile, y, "utf8", () => {})
	})
})
