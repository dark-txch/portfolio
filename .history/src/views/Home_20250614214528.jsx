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
				className="w-screen h-auto bg-[#33c9ff] text-[1.7rem] text-[#09063a] font-tinos leading-[2rem] px-[1rem] flex flex-col justify-center lg:text-[1.5rem]"
			>
				<h1 className="font-unna font-bold leading-[2.5rem] mt-[5rem] text-[2.5rem] mb-[1.5rem] lg:w-[65%] lg:mx-auto lg:text-[3rem]">
					Hello, I'm Ebenezer Tiewei
				</h1>
				<p className="mb-[1rem] lg:w-[65%] lg:mx-auto">
					I’m a Frontend Developer with a strong passion for building elegant,
					user-centered web applications.
				</p>
				<p className="mb-[1rem] lg:w-[65%] lg:mx-auto">
					My journey began on May 17 2024, and since then, I’ve developed a keen
					interest in responsive design, accessibility, and creating visually
					refined digital experiences.
				</p>
				<div className="flex justify-center w-screen mx-auto pt-20 mb-[10rem] lg:w-[65%] lg:mx-auto">
					<Link
						to="/about"
						className="inline-block uppercase text-cyan-200 font-bold bg-[#09063a] border shadow-deep border-cyan-500 text-base px-6 py-3 rounded-full hover:bg-[#33c9ff] hover:text-[#0C0950]  transition-all duration-500"
					>
						More about me
					</Link>
				</div>
				<BackToTop />
			</motion.main>
		</AnimatePresence>
	);
}
