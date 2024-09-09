/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': '#19181D',
				'primary': '#C2C2C2',
				'secondary': '#808080',
				'accent': '#ECECEC',
			},
		},
	},
	plugins: [],
}
