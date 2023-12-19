/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xxxs': '320px',
        'xxs': '380px',
        'xs': '450px',
        '3xl': '1700px'
      },
      colors: {
        primary: '#735624',
        secondary: '#1A1D1A',
        accent: '#493717',
        tertiary: '#9FA273',
        success: '#00C181'
      },
      backgroundColor: {
        'hero': 'linear-gradient(257deg, #ADA05C -3.49%, #F3F3E9 167.93%);',
        'card': 'linear-gradient(72deg, #BAB392 -6.2%, #816B44 -6.16%, #CECBBA 100.31%)',
        'faq': 'linear-gradient(251deg, #000 -54.04%, #EDCB58 95.87%);',
        'footer': ' linear-gradient(72deg, #BAB392 -6.2%, #816B44 -6.16%, #CECBBA 100.31%)'
      },
      spacing: {
        '9.5': '38px',
        '13': '50px',
        '18': '72px',
        '26': '106px',
        '38': '150px'
      },
      borderRadius: {
        '4xl': '38px',
        '6xl': '74px',
      },
      fontSize: {
        '4.5xl': '40px',
        '5.5xl': '56px'
      },
      height: {
        '146': '446px'
      },
      width: {
        '92': '360px'
      },
      boxShadow: {
        'nav': '0 2px 4px -2px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.10);',
        '3xl': '55px 5px 50px 0 rgba(0, 0, 0, 0.08);',
      }
    },
    container: {
      center: true,
      padding: {
        'xxxs': '.3rem',
        'xxs': '.6rem',
        'md': '1rem',
        '2xl': '3rem',
        '3xl': '5rem'
      }
    },
  },
  plugins: [],
}

