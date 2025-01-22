import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: "#32292F",
        mint: "#99E1D9",
        offWhite: "#F0F7F4",
        teal: "#70ABAF",
        brown: "#705D56",
      },
    },
  },
  plugins: [],
} satisfies Config;
