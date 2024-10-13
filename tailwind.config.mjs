/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sentient-regular': ['Sentient-Regular', 'serif'],
				'sentient-light': ['Sentient-Light' , 'serif'],
			}
		},
	},
	plugins: [],
}
