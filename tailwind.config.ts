import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        'background': 'var(--background)',
        'text-green': 'var(--green-accent)',
        'call-to-action': 'var(--call-to-action)',
        'caption-label-text': 'var(--caption-label-text)',
        'background-secondary': 'var(--background-secondary)',
      }
    },
  },
  plugins: [],
};
export default config;
