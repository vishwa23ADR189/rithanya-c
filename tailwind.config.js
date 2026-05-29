export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-bg': '#05040d',
        'panel-bg': 'rgba(13, 12, 24, 0.78)',
        'neon-purple': '#9552ff',
        'neon-blue': '#4fd1ff',
        'neon-cyan': '#50e5ff',
      },
      boxShadow: {
        'neon-soft': '0 30px 120px rgba(128, 90, 255, 0.18)',
        'glow-card': '0 30px 80px rgba(124, 58, 237, 0.2)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(123, 50, 255, 0.2), transparent 32%), radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.18), transparent 25%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(149, 82, 255, 0.24)' },
          '50%': { boxShadow: '0 0 60px rgba(149, 82, 255, 0.34)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
