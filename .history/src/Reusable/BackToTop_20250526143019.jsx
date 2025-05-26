import { useEffect, useState } from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		isVisible && (
			<button
				onClick={scrollToTop}
				className="fixed bottom-[15rem] right-5 p-3 text-cyan-500 text-[1rem] transition-all duration-300"
				aria-label="Back to top"
			>
				<RiArrowUpDoubleLine />
			</button>
		)
	);
};

export default BackToTop;
