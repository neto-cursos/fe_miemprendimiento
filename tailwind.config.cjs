/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondosidebar2': "url('/src/assets/images/FondoMenuSidebar2.jpg')",
        
      },
      fontFamily: {
        'poppins': '"poppins",sans-serif',
        'krona': '"KronaOneRegular", sans-serif',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        fondoimghome: '#FFE9D1',
        darkish: '#000000',
        bluenavish: '#14213D',
        //redish:'#FCA311',
        redish: '#E7AD04',
        grayish: '#E5E5E5',
        whitish: '#FFFFFF',
        bglogo: '#F45608',

        violeta: {
          light: '#C200FB',
          DEFAULT: '#B000E4',
          rojo: '#D704B2',
        },
        rojo: {
          light: '#F45608',
          DEFAULT: '#FC2F00',
          dark: '#F41C34',
          violeta: '#EC0868',
        },
        naranja: {
          dark: '#EC7D10',
          DEFAULT: '#F69D0D',
          light: '#FFBC0A',
          fondo:'#daae51',
        },
        // bglogo:'#2eb387',
        //bglogo:'#04e7ad',        
        //bglogotext:'#84594b',
        //bglogotext:'#133956',
        // bglogotext: '#04e7ad',
        bglogotext:'#F99A05',
        canvasBG1: '#ACE1FE',
        canvasBG2: '#E3C1E3',
        canvasBG3: '#EFECCC',
        canvasBG4: '#FCC3A4',
        canvasBG5: '#ACE2BD',
        canvasBG6: '#99DDD9',
        canvasBG7: '#B0CFE8',
        canvasBG8: '#FBE699',
        canvasBG9: '#DBECA9',
        canvasBG1dark: '#9acae4',
        canvasBG2dark: '#ccadcc',
        canvasBG3dark: '#d7d4b7',
        canvasBG4dark: '#e2af93',
        canvasBG5dark: '#9acbaa',
        canvasBG6dark: '#89c6c3',
        canvasBG7dark: '#9ebad0',
        canvasBG8dark: '#e1cf89',
        canvasBG9dark: '#c5d498',
        canvas1Txt: '#31B6FD',
        canvas2Txt: '#B964BB',
        canvas3Txt: '#D7D17F',
        canvas4Txt: '#F96A1B',
        canvas5Txt: '#30B85B',
        canvas6Txt: '#00ACA0',
        canvas7Txt: '#3987C7',
        canvas8Txt: '#F5C201',
        canvas9Txt: '#A5D028',
      },
      boxShadow: {
        'custom1': '0px 1px 5px 0px rgba(0, 0, 0, 0.3)',
        'custom2': '0px 1px 35px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
