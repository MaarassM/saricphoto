import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0f8',
          100: '#c5d9ed',
          200: '#9fc1e1',
          300: '#79a8d5',
          400: '#5c95cc',
          500: '#3f82c3',
          600: '#397abd',
          700: '#316fb5',
          800: '#2965ae',
          900: '#1b52a1',
        },
        navy: {
          50: '#e9f0f7',
          100: '#c7d9ec',
          200: '#a2c0df',
          300: '#7da7d2',
          400: '#6194c9',
          500: '#4581bf',
          600: '#3e79b9',
          700: '#356eb1',
          800: '#2d64a9',
          900: '#1e519b',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
