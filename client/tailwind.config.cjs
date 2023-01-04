/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.hmtl",
    "./src/**/*.jsx"
  ],
  
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        login: "url('/login-img.png')" ,
        register: "url('/register-img.png')",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'class'
  })],
}
