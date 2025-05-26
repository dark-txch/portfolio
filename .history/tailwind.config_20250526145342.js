// tailwind.config.js
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
		},
	},
	plugins: [require("tailwindcss-motion")],
};
