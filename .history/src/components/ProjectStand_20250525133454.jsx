// components/ProjectCard.jsx
import { useState } from "react";
import { FaHandPointRight, FaHandPointDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const ProjectStand = ({ images, summary, tools }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="lg:w-[50%]">
			<div className="bg-[#1c1860] w-full flex flex-col items-center border-[0.5rem] border-[#6DE1D2] rounded-[3rem]">
				<div className="bg-[#000000] w-full h-[8rem] flex justify-between p-[1rem] rounded-tl-[3rem] rounded-tr-[3rem] md:h-[15rem] lg:space-x-5 lg:h-[13rem]">
					{images.map((img, idx) => (
						<img
							key={idx}
							src={img.src}
							alt={img.alt}
							className="w-auto h-full"
						/>
					))}
				</div>
				<div className="w-full bg-[#000000]  rounded-bl-[3rem] rounded-br-[3rem] text-[#EAE4D5]">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="uppercase flex gap-3 items-center text-cyan-200 text-[1rem] pl-[1rem] pt-[1rem]"
					>
						{isOpen ? <FaHandPointDown /> : <FaHandPointRight />}
						portfolio
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
									<h4 className="text-[1.2rem] font-bold mb-1">Summary:</h4>
									<p className="text-[1rem] font-thin mb-3">{summary}</p>
									<h4 className="text-[1.2rem] font-bold mb-1">Tools:</h4>
									<ul className="flex flex-wrap gap-4 ">
										{tools.map((tool) => (
											<li key={tool} className="flex items-center gap-2">
												<GoDotFill className="text-cyan-400" size={10} />
												<span>{tool}</span>
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
			{/* desktop stand */}
			<div className="w-[3rem] h-[4rem] bg-[#6DE1D2] mx-auto"></div>
			<div className="w-[60%] h-[1rem] bg-[#6DE1D2] mx-auto rounded-tl-[5rem] rounded-tr-[5rem]"></div>
		</div>
	);
};
export default ProjectStand;
