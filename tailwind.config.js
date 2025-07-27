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
        // Minimal, modern color palette
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#111111',
        'bg-card': 'rgba(255, 255, 255, 0.03)',
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
        'text-muted': '#71717a',
        'accent-primary': '#6366f1',
        'accent-secondary': '#8b5cf6',
        'accent-tertiary': '#06b6d4',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
        'gradient-tertiary': 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
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