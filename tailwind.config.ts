import type { Config } from 'tailwindcss';

const config: Config = {
  // Keep Tailwind scanning tightly scoped to authored UI files for faster builds.
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf8',
          100: '#ccfbec',
          500: '#14b88a',
          600: '#0d946f',
          900: '#134e40',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
