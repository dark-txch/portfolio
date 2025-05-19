module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			font-family
		},
	},
	plugins: [require("tailwindcss-motion")],
};
