/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: '#133249',
        darkLighter: '#1231499',
        secondary: '#FFFFFF',
        accent: '#0ECB78'
        // accentTwo: '#E52A57'
      },
    },
  },
  plugins: [],
}
