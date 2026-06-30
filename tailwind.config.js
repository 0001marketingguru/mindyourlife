/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#F17720",
        mango: "#FFA630",
        silver: "#EBEBEB",
        sky: "#00A7E1",
        blue: "#0474BA",
        ink: {
          DEFAULT: "#0B1B2B",
          soft: "#142C42",
          line: "rgba(235,235,235,0.12)",
        },
        paper: {
          DEFAULT: "#FAFAF8",
          line: "rgba(11,27,43,0.10)",
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['Geist', 'sans-serif'],
      },
      animation: {
        'dash-flow': 'dash-flow 3s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'shake': 'shake 2.8s ease-in-out infinite',
      },
      keyframes: {
        'dash-flow': {
          to: { strokeDashoffset: '-160' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.6)', opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-5px) rotate(-1deg)' },
          '30%': { transform: 'translateX(5px) rotate(1deg)' },
          '45%': { transform: 'translateX(-4px)' },
          '60%': { transform: 'translateX(4px)' },
          '75%': { transform: 'translateX(-2px)' },
          '90%': { transform: 'translateX(2px)' },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}
