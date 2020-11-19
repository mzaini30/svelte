module.exports = {
  purge: {
  	mode: 'all',
  	content: [
		'./src/**/*.svelte',
		'./src/**/*.html',
	],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
