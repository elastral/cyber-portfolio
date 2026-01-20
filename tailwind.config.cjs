module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#00ff99',
        accent2: '#39a0ff',
        accent3: '#ff006e',
        bg: '#050609',
        panel: '#0a0e11',
        panel2: '#0f131a',
        muted: '#8b92a1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
