import { Link } from "react-router-dom";
import { useMediaQuery } from "../Reusable/MediaQueryHook";
import { motion, AnimatePresence } from "framer-motion";
import BackToTop from "../Reusable/BackToTop";

export default function Home() {
	const isLarge = useMediaQuery(1024);

	return (
		<AnimatePresence mode="wait">
			<motion.main
				key="home"
				initial={{
					opacity: 0,
					x: isLarge ? 0 : 100,
					y: isLarge ? 100 : 0,
				}}
				animate={{ opacity: 1, x: 0, y: 0 }}
				exit={{
					opacity: 0,
					x: isLarge ? 0 : 100,
					y: isLarge ? 100 : 0,
				}}
				transition={{ duration: 0.8 }}
				className="w-screen h-auto bg-[#09063a] text-[1.4rem] flex flex-col justify-center lg:text-[1.6rem]"
			>
				<h1 className="font-unna font-bold text-cyan-400 px-[1rem] leading-[3rem] mt-[5rem] text-[2.5rem] mb-[1.5rem] lg:w-[65%] lg:mx-auto lg:text-[3rem]">
					Hello, I'm Ebenezer Tiewei &#x1F44B;
				</h1>
				<p className="font-thin text-cyan-500 leading-[2.5rem] px-[1rem] mb-[2rem] lg:w-[65%] lg:mx-auto">
					I’m a Frontend Developer with a strong passion for building elegant,
					user-centered web applications.
				</p>
				<p className="font-thin text-cyan-500 leading-[2.5rem] px-[1rem] lg:w-[65%] lg:mx-auto">
					My journey began on May 17 2024, and since then, I’ve developed a keen
					interest in responsive design, accessibility, and creating visually
					refined digital experiences.
				</p>
				<div className="flex justify-center w-screen mx-auto mt-20 mb-[10rem] lg:w-[65%] lg:mx-auto">
					<Link
						to="/about"
						className="inline-block uppercase text-[1rem] text-cyan-200 border shadow-deep border-cyan-500 px-6 py-3 rounded-full hover:bg-cyan-500 hover:text-[#0C0950] hover: transition-all duration-500"
					>
						More about me
					</Link>
				</div>
				<BackToTop />
			</motion.main>
		</AnimatePresence>
	);
}
