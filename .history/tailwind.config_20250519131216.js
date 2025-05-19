module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Manrope"', "sans-serif"],
				Zain: ['"Manrope"', "sans-serif"],
				
			},
		},
	},
	plugins: [require("tailwindcss-motion")],
};
