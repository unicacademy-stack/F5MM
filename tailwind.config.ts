import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          blue: '#2563EB',
          light: '#EFF6FF'
        }
      },
      boxShadow: {
        card: '0 10px 30px rgba(11,31,58,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
