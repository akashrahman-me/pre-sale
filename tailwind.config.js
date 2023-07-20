/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      keyframes: {
        "slide-down": {
          "20%": {
            top: "62px",
          },
          "40%": {
            top: "124px",
          },
          "60%": {
            top: "186px",
          },
          "80%": {
            top: "248px",
          },
          "100%": {
            top: "292px",
          },
        },
      },
      animation: {
        "slide-down": "slide-down 5.375s linear 3.5s forwards",
      },
    },
  },
  plugins: [],
};
