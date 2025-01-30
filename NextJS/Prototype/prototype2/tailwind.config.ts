import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
		},
		animation: {
			'gradient': 'gradient 8s linear infinite',
			'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
			'fade-in': 'fadeIn 0.5s ease-in forwards',
			'float': 'float 10s ease-in-out infinite',
			'ellipsis': 'ellipsis 1.5s infinite steps(1)',
			'blink': 'blink 1s infinite',
		  },
		  keyframes: {
			gradient: {
			  '0%, 100%': {
				'background-size': '200% 200%',
				'background-position': 'left center'
			  },
			  '50%': {
				'background-size': '200% 200%',
				'background-position': 'right center'
			  },
			},
			typing: {
			  from: { width: '0' },
			  to: { width: '100%' }
			},
			blink: {
			  '0%, 100%': { opacity: '0' },
			  '50%': { opacity: '1' }
			},
			fadeIn: {
			  '0%': { opacity: '0', transform: 'translateY(10px)' },
			  '100%': { opacity: '1', transform: 'translateY(0)' }
			},
			float: {
			  '0%, 100%': { transform: 'translate(0, 0)' },
			  '50%': { transform: 'translate(10px, -10px)' }
			},
			ellipsis: {
			  '0%': { content: '.' },
			  '33%': { content: '..' },
			  '66%': { content: '...' },
			  '100%': { content: '' }
			},
		}
	}
  },
  plugins: [tailwindAnimate]
}

export default config;