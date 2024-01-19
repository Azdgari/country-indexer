/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-mode-background': 'hsl(207, 26%, 17%)',
				'dark-mode-elements': 'hsl(209, 23%, 19%)',
				'dark-mode-text': 'hsl(0, 0%, 100%)'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['dark', 'light', 'cupcake', 'bumblebee', 'emerald']
	}
};
