import { useState, useEffect } from "react";

export function useIsLargeScreen() {
	const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 1024px)");
		const handleChange = () => setIsLarge(mediaQuery.matches);
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return isLarge;
}
