const colors = require("tailwindcss/colors");
module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: 'class',
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
