module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)'
      }
    },
  },
  content: [
		'./src/**/*.{html,js,svelte,ts}'
	],
  variants: {
    extend: {},
  },
  plugins: [],
}
