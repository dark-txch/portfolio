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
				className="fixed bottom-[4rem] right-5 p-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg transition-all duration-300"
				aria-label="Back to top"
			>
				<RiArrowUpDoubleLine />
			</button>
		)
	);
};

export default BackToTop;
