import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '100': '100px',
        '150': '150px',
      },
      width: {
        '100': '100px',
      },
      margin: {
        "10%": "10%"
      },
      borderRadius: {
        'custom': '20px',
      },
      colors: {
        text: 'var(--text)',
        'call-to-action': 'var(--call-to-action)',
        'background-secondary': 'var(--background-secondary)',
        'caption-label-text': 'var(--caption-label-text)',
        'background': 'var(--background)'
      }
    },
  },
  plugins: [],
};
export default config;
