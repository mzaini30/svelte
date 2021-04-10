module.exports = {
  purge: [
     './src/**/*.{js,svelte,html}'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
  	// require('@tailwindcss/typography'),
  	// require('@tailwindcss/forms'),
  	// require('@tailwindcss/aspect-ratio'),
  ],
}
