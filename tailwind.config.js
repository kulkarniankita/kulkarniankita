const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    purgeLayersByDefault: true,
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {},

  plugins: [],
  corePlugins: {
    preflight: false,
  },
  variants: {
    extend: {
      textColor: ["dark"],
    },
  },
};
