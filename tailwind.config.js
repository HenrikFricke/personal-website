const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4DD0E",
        sedondary: "#9D52FD",
        tertiary: "#F952FD",
      },
      fontFamily: {
        "sans": ["Jost", ...defaultTheme.fontFamily.sans],
        "francois-one": ["Francois One", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        wave: "url('/img/wave.svg')",
        "wave-dark": "url('/img/wave-dark.svg')",
      },
    }
  },
  plugins: [],
}
