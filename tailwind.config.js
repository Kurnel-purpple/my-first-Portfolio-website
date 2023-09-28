/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'wheat': '#F5DEB3',
      'milk': '#fdfff5',
      'orangered':'#ff4500',
      'rebeccapurple':'#663399',
      'lightwheat':'#d6c69d',
      'mywheat':'#F5D7DB',
      'mywall':'#F1916D',
      'mylylac':'#BD83B8',
      'mygreyblue':'#473e66',
      'mydarkblue1':'#1b3358',
      'mydarkblue2':'#06142e'
      },
      backgroundImage: {
        'mic': "url('./images/mic.jpg')",
        'chess-girl': "url('./images/chess-girl.jpg')",
        'hall-shelf': "url('./images/hall-shelf.jpg')",
        'w-shelf': "url('./images/w-shelf.jpg')",
      },
      boxShadow:{
        'myShadow': '2px 2px 2px 2px',
        'myShadow2': '2px 2px 4px 2px #888C8D',
      },
      scale: {
        '-100': '-1',
    },
    },
  },
  plugins: [],
}

