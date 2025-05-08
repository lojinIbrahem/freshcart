/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'main':"#dc9ce3",
        'gray':"#221d0a"
      },
      container: {
      center:true,
      }

    },
  },
  plugins: [
    require('flowbite/plugin')  // add this line
  ],
}

