module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#171717',
        green: '#79f6d7',
        'gray-dark': '#212a31',
        'gray-mid': '#e6f1fa80',
        'gray-light': '#13112833',
        white: '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
