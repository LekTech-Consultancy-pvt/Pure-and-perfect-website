/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e88e5', // Blue from logo
        secondary: '#f5f5f5', // Light background
        dairyBlue: '#00A8E8',
        dairyDark: '#003459',
        dairyLight: '#E8F1F2',
        milkWhite: '#F8FDFF',
        offwhite: '#e0e0e0ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'splash-bounce': 'splashBounce 1s ease-out forwards',
        'shimmer': 'shimmer 2.5s infinite',
        'float-gentle': 'float-gentle 4s ease-in-out infinite',
        'gentle-sway': 'gentle-sway 3s ease-in-out infinite',
        'text-entrance': 'textEntrance 3s cubic-bezier(.22,.9,.35,1) both',
        'wave-animation': 'wave-animation 25s linear infinite',
        'wave-animation-reverse': 'wave-animation 15s linear reverse infinite',
        'rise-up': 'rise-up 4s infinite linear',
        'rise-up-7': 'rise-up 7s infinite linear',
        'rise-up-5': 'rise-up 5s infinite linear',
        'rise-up-6': 'rise-up 6s infinite linear',
        'splash-slide': 'splashSlide 1s ease-in-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gentleSway: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(2deg) scale(1.02)' },
        },
        textEntrance: {
          '0%': { opacity: '0', transform: 'translateX(-80px)' },
          '60%': { opacity: '1', transform: 'translateX(-2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        splashBounce: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        waveAnimation: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        riseUp: {
          '0%': {
            transform: 'translateY(100%) scale(0.5)',
            opacity: '0',
          },
          '20%': { opacity: '0.8' },
          '80%': { opacity: '0.4' },
          '100%': {
            transform: 'translateY(-100vh) scale(1.2)',
            opacity: '0',
          },
        },
        splashSlide: {
          '0%': { transform: 'translateY(40%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
