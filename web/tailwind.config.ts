import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: 'var(--font-inter-local)'
  		},
		backgroundImage: {
			fade: 'linear-gradient(to bottom, #d31920, #d31920 50%, #003087)'
		},
  		colors: {
			custom: {
				primary: '#003087',
				secondary: '#D31920'

			},

  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [forms],
} satisfies Config;
