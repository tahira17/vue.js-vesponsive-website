/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,vue}",
  ],
  theme: {
   
    extend: {
      backgroundImage : theme =>({
        'MaskGroup45' : "url('/src/assets/MaskGroup45.png')",
        'Header' :"url('/src/assets/Header.png')",
        'Pricing' :"url('/src/assets/Group1446.png')",
        'Footer' :"url('/src/assets/Group446.png')",
'rdmp':"url('/src//assets/rdmp4.png')"
      })
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

