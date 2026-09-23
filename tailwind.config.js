/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14171F',
        'ink-raised': '#1B1F2A',
        marquee: '#E8B34A',
        curtain: '#C1443C',
        paper: '#F2EFE9',
        muted: '#8A8F9C',
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
