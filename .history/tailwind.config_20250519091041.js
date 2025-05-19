module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Patrick+Hand
			}
		},
	},
	plugins: [require("tailwindcss-motion")],
};
