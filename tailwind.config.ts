import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
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
            inter: ["var(--font-inter)", ...fontFamily.sans],
         },
         boxShadow: {
            sm: "0 4px 50px #BD9EFF",
         },
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
   },
   plugins: [],
};
export default config;
