/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'resume.html',
    'projects.html',
    'contact.html',
    'mywork.html',
    'about.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
        colors: {
          'pastel': '#F6F4EB',
          'atlanta-blue': '#91C8E4',
          'mold': '#4682A9 ',
          'turquoise': '#AABD8C',
          'mountbatten-pink': '#4682A9',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

