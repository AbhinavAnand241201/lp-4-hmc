/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Yellow wallet color palette
        'bg-primary': '#fffbe6',
        'bg-secondary': '#fff9c4',
        'bg-card': '#fff59d',
        'text-primary': '#222222',
        'text-secondary': '#444444',
        'text-muted': '#888888',
        'accent-primary': '#ffe066', // main yellow
        'accent-secondary': '#fffde7', // light yellow
        'accent-tertiary': '#fffde7', // lighter yellow
        'yellow-main': '#ffe066', // main yellow
        'yellow-dark': '#ffd600', // dark yellow
        'yellow-light': '#fffde7', // lightest yellow
        'white-main': '#ffffff',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ffb6e9 0%, #ff6ec4 50%, #aeefff 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #aeefff 0%, #ffb6e9 100%)',
        'gradient-tertiary': 'linear-gradient(135deg, #fff 0%, #ffb6e9 100%)',
        'wallet-bg': 'linear-gradient(135deg, #fff 0%, #ffb6e9 40%, #aeefff 100%)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'subtle-pulse': 'subtle-pulse 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} 