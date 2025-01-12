/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      keyframes: {
        expand: {
          '0%': { maxHeight: '0', opacity: '0' },
          '100%': { maxHeight: '100px', opacity: '1' },
        },
        collapse: {
          '0%': { maxHeight: '100px', opacity: '1' },
          '100%': { maxHeight: '0', opacity: '0' },
        },
      },
      animation: {
        expand: 'expand 0.3s ease-out forwards',
        collapse: 'collapse 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};