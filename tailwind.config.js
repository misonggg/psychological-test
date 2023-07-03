/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        omyu: ['omyu_pretty'],
        wanju: ['TTWanjudaedunsancheB'],
        suite: ['SUITE-Regular'],
        gmarket: ['GmarketSansMedium'],
      },
      colors: {
        green2: '#98EECC',
        green1: '#D0F5BE',
        yellow1: '#FBFFDC',
        bb: '#A4907C',
      },
    },
  },
  plugins: [],
};
