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
				deep: "rgba(6, 182, 212, 0.4) 5px 5px, rgba(6, 182, 212, 0.3) 10px 10px, rgba(6, 182, 212, 0.2) 15px 15px, rgba(6, 182, 212, 0.1) 20px 20px, rgba(6, 182, 212, 0.05) 25px 25px",
			},
		},
	},
	plugins: [require("tailwindcss-motion")],
};
