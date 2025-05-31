module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Manrope"', "sans-serif"],
				unna: ['"Unna"', "serif"],
			},
			keyframes: {
				oscillate: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
			animation: {
				"motion-preset-oscillate": "oscillate 1.5s ease-in-out infinite",
			},
			boxShadow: {
				'deep': 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
			  },
			},
		},
	},
	plugins: [require("tailwindcss-motion")],
};
