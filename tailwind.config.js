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
      colors: {
        primary: {
          700: "#5200FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        inter: ["var(--font-inter)"],
      },
      boxShadow: {
        sm: "0 4px 50px #BD9EFF",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1260px",
      },
      keyframes: {
        "slide-down": {
          "10%": {
            top: "0px",
          },
          "20%": {
            top: "74px",
          },
          "30%": {
            top: "148px",
          },
          "40%": {
            top: "222px",
          },
          "50%": {
            top: "296px",
          },
          "70%": {
            top: "320px",
          },
          "93.75%": {
            top: "320px",
          },
        },
      },
      animation: {
        "slide-down": "slide-down 10s linear 2.75s normal infinite",
      },
    },
  },
  plugins: [],
};
