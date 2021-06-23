module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'PT':['PT Sans', 'sans-serif'],
        "RB": ['Roboto Slab', 'serif']
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
