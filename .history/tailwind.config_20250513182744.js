module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		// Add any other file paths that contain Tailwind classes
	],
	theme: {
		extend: {},
		// Explicitly define screens to ensure responsive prefixes work
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px", // ← This is crucial for lg: prefixes
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
};
