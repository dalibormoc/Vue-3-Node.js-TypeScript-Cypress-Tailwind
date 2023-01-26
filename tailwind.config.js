/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      '10': ['0.625rem', '0.875rem'], // font-size: 10px; line-height: 14px
      '12': ['0.75rem', '1rem'],  // font-size: 12px; line-height: 16px
      '12/24': ['0.75rem', '1.5rem'], // font-size: 12px; line-height: 24px
      '13': ['0.813rem', '1rem'], // font-size: 13px; line-height: 16px
      '13/20': ['0.813rem', '1.25rem'], // font-size: 13px; line-height: 20px
      '13/24': ['0.813rem', '1.5rem'], // font-size: 13px; line-height: 24px
      '14': ['0.875rem', '1.25rem'], // font-size: 14px; line-height: 20px
      '14/24': ['0.875rem', '1.5rem'], // font-size: 14px; line-height: 24px
      '15': ['0.938rem', '1.125rem'], // font-size: 15px; line-height: 18px
      '16': ['1rem', '1.25rem'], // font-size: 16px; line-height: 20px
      '16/24': ['1rem', '1.5rem'], // font-size: 16px; line-height: 24px
      '20': ['1.25rem', '1.5rem'], // font-size: 20px; line-height: 24px
      '32': ['2rem', '2.25rem'], // font-size: 32px; line-height: 36px
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
