module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Patrick Hand"', "sans-serif"],
				patrick: ['""', "cursive"],
			},
		},
	},
	plugins: [require("tailwindcss-motion")],
};
