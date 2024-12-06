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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'text-blink': 'textBlink 3s ease-in-out infinite',
      },
      keyframes: {
        textBlink: {
          '0%, 100%': {
            textShadow: '0 0 4px rgba(255,255,255,0.1), 0 0 12px rgba(255,255,255,0.1), 0 0 24px rgba(255,255,255,0.1)',
          },
          '50%': {
            textShadow: '0 0 8px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.6), 0 0 36px rgba(255,255,255,0.6)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
