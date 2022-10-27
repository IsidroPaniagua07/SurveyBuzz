/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      colors: {
        jcruby: '#72253d',
        jcaqua: '#007079',
        jcslate: '#5b6770',
        jcamber: '#ff4814',
        jcgold: '#ffa400',
        jconyx: '#000000',
        primary: '#202225',
        secondary: '#5865f2',
        fadedblack: 'rgba(0, 0, 0, .6)',
      },
    },
    fontFamily: {
      RobotoMono: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
