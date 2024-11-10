/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'primary-dark-color': 'var(--primary-dark-color)',
        'secondary-color': 'var(--secondary-color)',
        'text-primary': 'var(--text-primary)',
        'font-family': 'var(--font-family)',
      },
    },
  },
  plugins: [],
}
