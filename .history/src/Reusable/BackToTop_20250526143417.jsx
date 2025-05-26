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
				className="fixed bottom-[15rem] right-5 text-cyan-500 text-[1.5rem] transition-all duration-300 hover:scale-[1.2]"
				aria-label="Back to top"
			>
				<RiArrowUpDoubleLine />
			</button>
		)
	);
};

export default BackToTop;
