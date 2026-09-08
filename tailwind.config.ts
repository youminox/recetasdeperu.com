import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        warm: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dd',
          300: '#d5cfc4',
          400: '#b8ad9e',
          500: '#9a8c7b',
          600: '#7d6e5e',
          700: '#665a4d',
          800: '#554b41',
          900: '#494038',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h2: {
              color: '#991b1b',
              fontWeight: '700',
            },
            h3: {
              color: '#b91c1c',
              fontWeight: '600',
            },
            strong: {
              color: '#111827',
            },
            a: {
              color: '#dc2626',
              '&:hover': {
                color: '#991b1b',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
