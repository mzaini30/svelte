git status
git add -A .
git commit -m "oke"
git push

rm public/*.js

npm run build

cp public/index.html public/200.html

surge public
