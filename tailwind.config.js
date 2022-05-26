module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        showFromTop: {
          'from': { top: '-100%' },
          'to': { top: '0' },
        },
        showFromRight: {
          'from': { right: '-23rem' },
          'to': { right: '0' }
        },
        newSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '30%': { transform: 'rotate(90deg)' },
          '60%': { transform: 'rotate(-90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
        
      },

      animation: {
        showFromTop: 'showFromTop 1s ease-in-out',
        showFromRight: 'showFromRight 1s ease-in-out',
        newSpin: 'newSpin 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
