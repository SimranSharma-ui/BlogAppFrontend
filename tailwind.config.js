/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideLeftToRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRightToLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInFromBottom: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out',
        slideLeftToRight: 'slideLeftToRight 1s ease-out forwards',
        slideRightToLeft: 'slideRightToLeft 1s ease-out forwards',
        fadeInFromBottom: 'fadeInFromBottom 1s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animated')], 
}
