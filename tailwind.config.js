/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f6b5f',
        'primary-dark': '#0b4f47',
        'primary-light': '#14a38f',
        navy: '#111827',
        'navy-light': '#1e293b',
        ink: '#111827',
        muted: '#6b7280',
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
