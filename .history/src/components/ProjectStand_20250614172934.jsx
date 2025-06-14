// components/ProjectCard.jsx
import { useState } from "react";
import { FaHandPointRight, FaHandPointDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../Reusable/MediaQueryHook";

const ProjectStand = ({ title, images, summary, tools, view }) => {
	const [isOpen, setIsOpen] = useState(false);
	const isLarge = useMediaQuery(1024);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={ProjectStand}
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
			>
				<div className="bg-[#09063a] w-full flex flex-col items-center border-[0.5rem] border-[#09063a] rounded-[3rem]">
					<div className="bg-[#33c9ff] w-full h-[8rem] flex justify-between p-[1rem] rounded-tl-[3rem] rounded-tr-[3rem] md:h-[15rem] lg:p-[1.5rem] lg:h-[14.5rem]">
						{images.map((img, idx) => (
							<img
								key={idx}
								src={img.src}
								alt={img.alt}
								className="w-auto h-full transition-transform duration-300 hover:scale-[1.15]"
							/>
						))}
					</div>
					<div className="w-full bg-[#09063a] font-tinos  leading-[2rem] pb-[1.5rem] rounded-bl-[3rem] rounded-br-[3rem] text-cyan-300">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="pl-[1rem] pt-[1rem] uppercase font-bold font-unna flex gap-3 items-center text-[1rem]"
						>
							{isOpen ? (
								<FaHandPointRight />
							) : (
								<FaHandPointDown className="transform scale-x-[-1]" />
							)}
							{title}
						</button>
						<AnimatePresence>
							{isOpen && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
									exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
									className="mt-4 space-y-4"
								>
									<div className="pl-[2.8rem] pr-[1rem] border-b-[0.1px] rounded-bl-[3rem] rounded-br-[3rem] border-cyan-500 pt-2 pb-2">
										<h4 className="text-[1.2rem] font-bold mb-1 text-cyan-400">
											Summary:
										</h4>
										<p className="text-[1.1rem] font-thin mb-3 text-cyan-400">
											{summary}
										</p>
										<h4 className="text-[1.2rem] font-bold mb-1 text-cyan-400">
											Tools:
										</h4>
										<ul className="flex flex-wrap gap-3 ">
											{tools.map((tool) => (
												<li
													key={tool}
													className="flex items-center gap-2 mb-[1rem]"
												>
													<GoDotFill className="text-cyan-200" size={10} />
													<span className="text-cyan-400">{tool}</span>
												</li>
											))}
										</ul>
										<a
											href={view}
											target="_blank"
											rel="noopener noreferrer"
											className="text-[1.2rem] text-cyan-300 font-bold font-unna mb-1 flex items-center gap-3 w-fit hover:text-green-400 hover:scale-[1.1] transition- duration-300"
										>
											<FaHandPointRight className="text-cyan-300" />
											View project
										</a>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
				{/* desktop stand */}
				<div className="w-[3rem] h-[4rem] bg-[#09063a] mx-auto hidden md:hidden lg:block"></div>
				<div className="w-[60%] h-[1rem] bg-[#09063a] mx-auto rounded-tl-[5rem] rounded-tr-[5rem] hidden md:block lg:block"></div>
			</motion.div>
		</AnimatePresence>
	);
};
export default ProjectStand;
