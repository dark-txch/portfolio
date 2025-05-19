module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Manrope"', "sans-serif"],
				unna: ['"Unna"', "serif"],
			},
		},
	},
	plugins: [require("tailwindcss-motion")],
};
