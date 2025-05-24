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
				"My personal portfolio website built to showcase my frontend projects, skills, and contact information. It is fully responsive and built with modern tools.",
			tools: ["Vite", "React", "Tailwind CSS", "GitHub Pages"],
		},
	];

	return (
		<div className=" w-screen h-auto flex flex-col px-[1rem] pt-[5rem] pb-[10rem]  border">
			<div className="bg-[#1c1860] w-full flex flex-col items-center border lg:w-[50%]">
				<div className="bg-[#1c1860] w-full h-[18rem] borderflex justify-between p-[1rem] lg:space-x-5 lg:h-[14rem]">
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
					<div className="text-[#EAE4D5] w-full">
						<button
							onClick={() => setProjectPortfolio(!projectPortfolio)}
							className="uppercase flex gap-3 items-center text-cyan-200 text-[1rem] pl-[1rem] pt-[1rem]"
						>
							{projectPortfolio ? <FaHandPointDown /> : <FaHandPointRight />}
							portfolio
						</button>
						<AnimatePresence>
							{projectPortfolio && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
									exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
									className="mt-4 space-y-4"
								>
									{portfolioSummary.map((category) => (
										<div
											key={category.summary}
											className="pl-[2.8rem] pr-[1rem] border-b-[0.1px] border-cyan-500 pt-2 pb-2"
										>
											<h4 className="text-[1.2rem] font-bold mb-1">Summary:</h4>
											<p className="text-[1rem] font-thin mb-3">
												{category.summary}
											</p>
											<h4 className="text-[1.2rem] font-bold mb-1">Tools:</h4>
											<ul className="flex flex-wrap gap-4">
												{category.tools.map((tool) => (
													<li key={tool} className="flex items-center gap-2">
														<GoDotFill className="text-cyan-400" size={10} />
														<span>{tool}</span>
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
