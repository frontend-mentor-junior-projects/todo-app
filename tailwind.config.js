/** @type {import('tailwindcss').Config} */

export default {
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-100': 'hsl(220, 98%, 61%)',
				'light-100': 'hsl(0, 0%, 98%)',
				'light-200': 'hsl(236, 33%, 92%)',
				'light-300': 'hsl(233, 11%, 84%)',
				'light-400': 'hsl(236, 9%, 61%)',
				'light-500': 'hsl(235, 19%, 35%)',
				'dark-100': 'hsl(236, 33%, 92%)',
				'dark-200': 'hsl(234, 39%, 85%)',
				'dark-300': 'hsl(234, 11%, 52%)',
				'dark-400': 'hsl(233, 14%, 35%)',
				'dark-500': 'hsl(237, 14%, 26%)',
				'dark-600': 'hsl(235, 21%, 11%)',
				'dark-700': 'hsl(235, 24%, 19%)',
			},
			backgroundImage: {
				check: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
			},
			fontSize: {
				body: '18px',
			},
			fontFamily: {
				sans: ['Josefin Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
