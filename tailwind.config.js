/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      '10': ['0.625rem', '14px'],
      '12': ['0.75rem', '16px'],
      '13': ['0.813rem', '16px'],
      '13/20': ['0.813rem', '20px'],
      '13/24': ['0.813rem', '24px'],
      '14': ['0.875rem', '20px'],
      '14/24': ['0.875rem', '24px'],
      '15': ['0.938rem', '18px'],
      '16': ['1rem', '20px'],
      '16/24': ['1rem', '24px'],
      '20': ['1.25rem', '24px'],
      '32': ['2rem', '36px'],
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
