
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				orbit: {
					yellow: {
						50: '#FFFDF0',
						100: '#FFFBE0',
						200: '#FFF7C2',
						300: '#FFF093',
						400: '#FFE65C',
						500: '#FFDD29',
						600: '#FFD000',
						700: '#D6AE00',
						800: '#A38500',
						900: '#705C00',
					},
					orange: {
						50: '#FFF8F5',
						100: '#FFF1EB',
						200: '#FFE2D7',
						300: '#FFCCB8',
						400: '#FFAC8F',
						500: '#FF8F66',
						600: '#FF733D',
						700: '#FF5A14',
						800: '#E04500',
						900: '#B83800',
					},
					purple: {
						50: '#F6F4FF',
						100: '#EDEBFF',
						200: '#DCD6FF',
						300: '#C1B5FF',
						400: '#A693FF',
						500: '#8B70FF',
						600: '#704DFF',
						700: '#5A2BFF',
						800: '#4700FF',
						900: '#3900CC',
					},
					pink: {
						50: '#FFF5F9',
						100: '#FFEAF3',
						200: '#FFD6E7',
						300: '#FFB6D3',
						400: '#FF8CB8',
						500: '#FF669D',
						600: '#FF3F81',
						700: '#FF1966',
						800: '#F0004F',
						900: '#BD0040',
					},
					cosmos: {
						50: '#24162D',
						100: '#1E1227',
						200: '#180F21',
						300: '#120B1A',
						400: '#0C0714',
						500: '#07050F',
						600: '#050309',
						700: '#030206',
						800: '#010103',
						900: '#000000',
					}
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-down': {
					'0%': { opacity: '0', transform: 'translateY(-10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'pulse-light': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in-down': 'fade-in-down 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-light': 'pulse-light 2s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'glass': 'linear-gradient(109.6deg, rgba(223,234,247,0.6) 11.2%, rgba(244,248,252,0.6) 91.1%)',
				'blue-gradient': 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)',
				'orbit-gradient': 'linear-gradient(135deg, rgba(255,208,0,1) 0%, rgba(255,115,61,1) 50%, rgba(123,75,255,1) 100%)',
				'cosmos-gradient': 'radial-gradient(ellipse at center, rgba(36,22,45,1) 0%, rgba(18,11,26,1) 50%, rgba(0,0,0,1) 100%)',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(8px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
