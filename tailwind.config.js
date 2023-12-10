/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      'index.html',
      'contact.html',
      'resume.html',
      'project.html',
      'samples.html',
      'about.html',
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
}