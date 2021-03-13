rm public/*.js
rm -rf ssg/
npm run build
cp -r public/ ssg/
spank -e public/index.html -s public/main.js -o ssg/
cp ssg/index.html ssg/200.html