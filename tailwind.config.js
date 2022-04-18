const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Jost', ...defaultTheme.fontFamily.sans],
        'francois-one': ['Francois One', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}
