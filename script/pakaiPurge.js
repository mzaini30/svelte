fs = require('fs')
const { exec } = require('child_process');
fs.readdir("public/dist", (_, x) => {
	x = x.filter(x => x.match(/\.css/g)).filter(x => x != "global.css")
	// x = ['bootstrap.min.css']
	for (y of x){
		exec(`purgecss --css hasil/dist/${x} --content src/**/*.svelte --output hasil/dist2`)
	}
	namaFile = "hasil/index.html"
	fs.readFile(namaFile, "utf8", (_, y) => {
		y = y.replace(`/dist/${x}`, `/dist2/${x}`)
		fs.writeFile(namaFile, y, "utf8", () => {})
	})
})