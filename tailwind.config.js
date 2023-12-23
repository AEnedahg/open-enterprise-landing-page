/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    '*.js'
  ],
  theme: {
    width: {
      'xs': '320px',
      'sm': '375px',
      'md': '475px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1440px',
      '5xl': '1536px',
    },
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '475px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1440px',
      '5xl': '1536px',
    },
    extend: {
      colors: {
        'brandPrimary': '#71A894',
        'brandPrimaryDark': '#718894',
        'neutral-0': '#FFFFFF',
        'neutral-200': '#F9F9F9',
        'neutral-600': '#66645E',
        'neutral-900': '#303031',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

