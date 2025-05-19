module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Patrick: {
					sans: ['"Patrick Hand"', "cursive"],
				},
			},
		},
	},
	plugins: [require("tailwindcss-motion")],
};
