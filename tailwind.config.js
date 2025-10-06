/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        kodex: ['Kodex', 'sans-serif'],
        menda: ['Menda', 'sans-serif'],
        akira: ['Akira', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif']
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
        marqueeVertical: 'marqueeVertical 30s linear infinite',
        marqueeVertical2: 'marqueeVertical2 40s linear infinite',
        marqueeVerticalReverse: 'marqueeVerticalReverse 25s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        scroll: 'scroll 15s linear infinite',
      },
      keyframes: {
        // marquee: {
        //   from: { transform: 'translateX(0%)' },
        //   to: { transform: 'translateX(-100%)' },
        // },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueeVertical: {
          from: { transform: 'translateY(0%)' },
          to: { transform: 'translateY(-100%)' },
        },
        marqueeVertical2: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        marqueeVerticalReverse: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px #f59e0b, 0 0 20px #f97316' },
          '50%': { textShadow: '0 0 20px #f97316, 0 0 40px #ef4444' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' },
        },
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundSize: {
        'shimmer': '1400px 100%',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/line-clamp'),
  ],
}

