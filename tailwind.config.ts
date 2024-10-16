import type { Config } from "tailwindcss";

const config: Config = {
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
      height: {
        '100': '100px',
        '150': '150px',
      },
      width: {
        '100': '100px',
        '330': '330px',
      },
      borderRadius: {
        'custom': '20px',
      },
    },
  },
  plugins: [],
};
export default config;
