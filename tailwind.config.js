/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : theme =>({
        'MaskGroup46' : "url('./')"
      })
    },
  },
  plugins: [],
}

