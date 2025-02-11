/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      // fontFamily: {
      //   poppins: ['Poppins', 'sans-serif'],
      // },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'slide-left': 'slide-left 15s linear infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      filter: {
        'customBlue': 'invert(45%) sepia(100%) saturate(7000%) hue-rotate(182deg) brightness(94%) contrast(92%)',
      },
    },
  },
  variants: {
    extend: {
      filter: ['hover'],
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
