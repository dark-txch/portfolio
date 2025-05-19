module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Manrope"', "sans-serif"],
				patrick: ['""', "cursive"],
			},
		},
	},
	plugins: [require("tailwindcss-motion")],
};
