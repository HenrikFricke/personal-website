const defaultTheme = require("tailwindcss/defaultTheme");
const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#F4DD0E",
      sedondary: "#9D52FD",
      tertiary: "#F952FD",
    },
    extend: {
      fontFamily: {
        "sans": ["Jost", ...defaultTheme.fontFamily.sans],
        "francois-one": ["Francois One", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        wave: "url('/img/wave.svg')",
      }
    }
  },
  plugins: [
    iOSHeight,
  ],
}
