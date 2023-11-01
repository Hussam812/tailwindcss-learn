/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        widescreen: { row: "(min-aspect-ratio: 3/2" },
        tallscreen: { row: "(min-aspects-ratio:1/2" },
      },
    },
  },
  plugins: [],
};
