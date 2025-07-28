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
        // HMC Wallet dark purple/indigo color palette
        'bg-primary': '#0f0f23',
        'bg-secondary': '#1a1a2e',
        'bg-card': '#16213e',
        'text-primary': '#ffffff',
        'text-secondary': '#a8a8a8',
        'text-muted': '#6b7280',
        'accent-primary': '#6366f1', // indigo
        'accent-secondary': '#8b5cf6', // purple
        'accent-tertiary': '#a855f7', // purple
        'purple-main': '#6366f1', // main indigo
        'purple-dark': '#4f46e5', // dark indigo
        'purple-light': '#8b5cf6', // light purple
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