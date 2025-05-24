import IphonePortfolio from "../assets/Projects/porfolio/iPhonePortfolio.png";
import IpadPortfolio from "../assets/Projects/porfolio/IpadPortfolio.png";
import MacbookPortfolio from "../assets/Projects/porfolio/MacbookPortfolio.png";
import { FaHandPointRight, FaHandPointDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
	const [projectPortfolio, setProjectPortfolio] = useState(false);
	const portfolioSummary = [
		{
			summary:
				"A personal portfolio website built to showcase my frontend projects, skills, and contact information. Fully responsive, built with modern tools, and includes interactive UI elements.",
			tools: ["Vite", "React", "Tailwind CSS", "GitHub Pages"],
		},
	];

	return (
		<div className=" w-screen h-auto flex flex-col px-[1rem] pt-[5rem] pb-[10rem]  border">
			<div className="bg-[#1c1860] w-full mx-auto p-[1rem] flex flex-col items-center border">
				<div className="bg-[#1DCD9F] w-full h-[18rem] border flex justify-between p-[1rem] mb-[1rem] lg:h-[25rem] lg:space-x-5">
					<img
						src={IphonePortfolio}
						alt="IphonePortfolio"
						className="w-auto h-[100%]"
					/>
					<img
						src={IpadPortfolio}
						alt="IpadPortfolio"
						className="w-auto h-[100%]"
					/>
					<img
						src={MacbookPortfolio}
						alt="MacbookPortfolio"
						className="hidden w-auto h-[100%] lg:block"
					/>
				</div>
				<div className=" w-full">
					<h4 className="font-unna font-bold  text-[1.5rem] text-center text-cyan-200 underline decoration-dashed mb-[1rem]">
						portfolio
					</h4>
					<div className="text-[#EAE4D5] mt-10 px-[1rem] border w-full lg:w-[50%]">
						<button
							onClick={() => setProjectPortfolio(!projectPortfolio)}
							className="uppercase flex gap-3 items-center text-cyan-200 text-[1rem]"
						>
							{projectPortfolio ? <FaHandPointDown /> : <FaHandPointRight />}
							details
						</button>
						<AnimatePresence>
							{projectPortfolio && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
									exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
									className="mt-6 space-y-5"
								>
									{portfolioSummary.map((category) => (
										<div
											key={category.summary}
											className="px-[2rem] border-b-[0.1px] border-cyan-500 pt-2 pb-5"
										>
											<h4 className="text-[1.2rem] font-bold mb-3">Summary:</h4>
											<p className="text-[1rem] font-thin mb-3">
												{category.summary}
											</p>
											<h4 className="text-[1.2rem] font-bold mb-3">Tools:</h4>
											<ul className="text-[1rem] font-thin flex gap-3 items-center">
												{category.tools.map((tool) => (
													<li
														key={tool}
														className="flex flex-col justify-center items-center gap-2 border"
													>
														<span>{tool}</span>
														<GoDotFill className="text-cyan-400" size={10} />
													</li>
												))}
											</ul>
										</div>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<div>
						<button></button>
					</div>
				</div>
			</div>
		</div>
	);
}
