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
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: {
          300: '#EDE8DC', // warna beige lebih terang
        },
        sage: {
          300: '#C1CFA1', // warna beige lebih terang
          500: '#A5B68D', // warna beige lebih gelap
        },
      },
    },
  },
  plugins: [],
};
export default config;
