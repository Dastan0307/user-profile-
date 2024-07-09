import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			borderWidth: {
				'1': '1px',
			},
			borderColor: {
				custom: 'rgb(54, 55, 56)',
			},
			borderRadius: {
				'18': '18px',
				'12': '12px',
			},
			backgroundColor: {
				bgcolor: 'rgb(35, 35, 36)',
				
			},
			padding: {
				'30': '30px',
			},
			textColor: {
				'primary': 'rgb(225, 227, 230)',
				'grey': 'rgb(118, 120, 122)'
			},
			marginLeft: {
				'16': '-16px'
			}
		},
	},
	plugins: [],
}
export default config
