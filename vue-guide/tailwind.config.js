const colors = require("tailwindcss/colors");
module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: "poppins, sans-serif",
    },
    extend: {
      colors: {
        rose: colors.rose
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
