module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				// sans: ['"Manrope"', "sans-serif"],
				tinos: ['"Tinos"', "serif"],
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
				deep: "rgb(24, 15, 168) 5px 5px, rgb(24, 15, 168) 10px 10px, rgb(9,6,58) 15px 15px, rgb(9,6,58) 20px 20px, rgb(9,6,58)25px 25px",
			},
		},
	},
	plugins: [require("tailwindcss-motion")],
};
