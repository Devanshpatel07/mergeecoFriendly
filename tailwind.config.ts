import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2F5D3A',
          light: '#3E7B4D',
          dark: '#1E3C25',
          deep: '#142819',
        },
        leaf: {
          DEFAULT: '#7BAE5A',
          light: '#96C676',
          dark: '#5E8B42',
        },
        earth: {
          DEFAULT: '#C9703F',
          light: '#D88B5F',
          dark: '#A65529',
        },
        cream: {
          DEFAULT: '#FAF6EE',
          light: '#FFFDF9',
          dark: '#F0E8D7',
          warm: '#F7EFE0',
        },
        ink: {
          DEFAULT: '#2B2B2B',
          light: '#4B4B4B',
          muted: '#6B6B6B',
          soft: '#8B8B8B',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'kraft': '0 4px 20px -2px rgba(47, 93, 58, 0.08), 0 2px 6px -1px rgba(201, 112, 63, 0.06)',
        'kraft-lg': '0 10px 30px -4px rgba(47, 93, 58, 0.12), 0 4px 12px -2px rgba(201, 112, 63, 0.08)',
        'lift': '0 14px 28px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.04)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'kraft-pattern': "radial-gradient(#C9703F15 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
