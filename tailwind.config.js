/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : theme =>({
        'MaskGroup45' : "url('/src/assets/MaskGroup45.png')",
        'Header' :"url('/src/assets/Header.png')",
        'Pricing' :"url('/src/assets/Group1446.png')",
        'Footer' :"url('/src/assets/Group446.png')",

      })
    },
  },
  plugins: [
    
  ],
}

