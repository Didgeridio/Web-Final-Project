/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      'index.html',
      'contact.html',
      'resume.html',
      'projects.html',
      'mywork.html',
      'about.html',
      "./node_modules/flowbite/**/*.js"
],
  theme: {
      extend: {
          colors: {
              'pastel': '#F6F4EB',
              'atlanta-blue': '#91C8E4',
              'carolina-blue': '#86BBD8',
              'mold': '#4682A9',
              'turquoise': '#4682A9',
          },
      },
  },
  plugins: [
    require('flowbite/plugin')
]
}