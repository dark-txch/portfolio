module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			font
		},
	},
	plugins: [require("tailwindcss-motion")],
};
