/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '2000px',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['Geist Mono', 'Courier New', 'monospace'],
        sans: ['Gabarito', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        obsidian: '#231d16',
        charcoal: '#141414',
        'warm-white': '#f5f0eb',
        'dim-white': '#b8b0a8',
        amber: '#c9a96e',
        'amber-dim': '#8a6f47',
        'ash-grey': '#d9d9d9',
        'dimmed-ink': '#505050',
        'bold-ink': '#111111',
        'accent-color': '#251bf3',
      },
      letterSpacing: {
        'widest-2': '0.25em',
        'widest-3': '0.4em',
      },
    },
  },
  plugins: [],
}
