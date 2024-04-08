import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
	content: [],
	theme: {
		extend: {
			fontSize: {
				body: 'clamp(1rem, 1.25vw, 1.25rem)',
				h1: 'clamp(1.875rem, 5vw, 3rem)',
				h2: 'clamp(1.5rem, 4vw, 2.25rem)',
				h3: 'clamp(1.25rem, 3vw, 1.875rem)',
				h4: 'clamp(1.125rem, 2vw, 1.5rem)',
				h5: 'clamp(1rem, 1.25vw, 1.25rem)',
				h6: 'clamp(1rem, 1.25vw, 1.25rem)',
				toast: 'clamp(0.8rem, 1.25vw, 1.5rem)',
			},
			colors: {
				primary: {
					'50': '#edfff5',
					'100': '#d6ffe9',
					'200': '#afffd3',
					'300': '#71ffb3',
					'400': '#2dfb8b',
					'500': '#02e56b',
					'600': '#00bf54',
					DEFAULT: '#009b48',
					'800': '#06753a',
					'900': '#085f32',
					'950': '#00361a',
				},
				'primary-foreground': colors.white,
				secondary: {
					'50': '#fff7ed',
					'100': '#ffecd4',
					'200': '#ffd5a9',
					'300': '#ffb672',
					'400': '#fe8d39',
					DEFAULT: '#fd7622',
					'600': '#ee5108',
					'700': '#c53b09',
					'800': '#9c2f10',
					'900': '#7e2910',
					'950': '#441106',
				}, // Voeg hier je gewenste hex-kleurcode toe
				thirdary: '#002776',
				'primary-light': '#99DAD6',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
};
export default config;
