module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Patrick Hand"', "sans-serif"],
				manr: ['"Manrope"', "cursive"],
			},
		},
	},
	plugins: [require("tailwindcss-motion")],
};
