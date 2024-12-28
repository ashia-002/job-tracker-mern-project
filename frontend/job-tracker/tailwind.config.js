// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'websiteBG': "url('/src/assets/bgimage/websiteBG.svg')", // Add the background image
      },
      colors: {
        'primaryButtonColor' : '#70E000',
        'hoverButtonColor' : '#E0D820',
        'textThemeColor' : '#9EF01A',
        'navbarBGColor' : '#C6F399',
        'tableBGColor' : '#E2F9CC',
        'cardBGColor' : '#F1FCE5',

        'favoriteAccentColor' : '#073B3A',
        'favoriteAccentColor02' : '#F2F230',

        'textPrimaryColor' : '#212121',
        'textSecondary01Color' : '#757575',
        'textSecondary02Color' : '#3C3C3C',

        'white' : '#FFFFFF',
        'pureBlack' : '#000000'
      },
      fontFamily: {
        'headerFont': ["Roboto", "sans-serif"],
        'bodyFont': ["Poppins", "sans-serif"],
        'themeFont': ["Sofadi One", "system-ui"],
        'buttonFont': ["Inter", "sans-serif"]
      },
      fontSize: {
        sm: '14px',
        md: '16px', 
        base: '18px',
        lg: '20px',
        xl: '24px',
        '2xl' : '26px',
        '3xl': '34px',
        '4xl': '36px',
        '6xl' : '64px'
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '16': '4rem',
        '24' : '1.5rem',
        '32': '8rem',
        '42' : '2.625rem',
        '98' : '6.125rem'
      }
    },
  },
  plugins: [],
}
