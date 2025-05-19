module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Patrick: {
					regular: ["PatrickHand", "cursive"],
					bold: ["PatrickHandSC", "cursive"],
				},
			}
		},
	},
	plugins: [require("tailwindcss-motion")],
};
