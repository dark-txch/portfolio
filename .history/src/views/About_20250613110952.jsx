import EbenezerPortfolioOptimized from "../assets/About/EbenezerPortfolioOptimized.webp";
import { FaHandPointRight, FaHandPointDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../Reusable/MediaQueryHook";
import BackToTop from "../Reusable/BackToTop";

export default function About() {
	const [showSkills, setShowSkills] = useState(false);
	const skillCategories = [
		{ title: "Languages", skills: ["HTML", "CSS", "JAVASCRIPT"] },
		{ title: "Libraries", skills: ["REACT"] },
		{ title: "Frameworks", skills: ["Tailwind CSS"] },
		{ title: "Tools", skills: ["GIT", "VSCODE", "FIGMA"] },
	];

	const isLarge = useMediaQuery(1024);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key="about"
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
				className="w-screen h-auto bg-[#09063a] text-[1.4rem] lg:text-[1.6rem] lg:px-[2rem]"
			>
				<div className="flex flex-col justify-center px-[1rem] lg:flex-row lg:gap-[1rem]">
					<div className="lg:w-full order-1">
						<h1 className="font-unna font-bold text-cyan-400 leading-[3rem] mt-[5rem] text-[2.5rem] mb-[1.5rem] lg:text-[3rem]">
							Hello, I'm Ebenezer Tiewei &#x1F44B;
						</h1>
						<p className="font-thin text-cyan-500 leading-[2.5rem] mb-[2rem]">
							My
							{/* I made a decision to transition from a gym instructor and personal
							trainer to a software developer on May 17 2024 and it as been one
							of the best decisions i have made. */}
						</p>
						<p className="font-thin text-cyan-500 leading-[2.5rem] mb-[2rem]">
							My journey began at AltSchool Africa, where I immersed myself in
							the world of web development. Interestingly, my passion for
							building visually pleasing and user-friendly web applications was
							ignited. Since then i have developed a strong interest in
							responsive design, accessibility, and creating refined web
							applications.
						</p>
						<p className="font-thin text-cyan-500 leading-[2.5rem] mb-[2rem]">
							I am also developing a deeper understanding of the principles of
							software development in order to become a proficient software
							engineer.
						</p>
						<p className="font-thin text-cyan-500 leading-[2.5rem] mb-[2rem]">
							I am therefore currently seeking opportunities to work on exciting
							projects and collaborate with talented individuals in the tech
							industry.
						</p>
						<p className="font-thin text-cyan-500 leading-[2.5rem] mb-[2rem]">
							My interest lies in roles that allow me to contribute to the
							development of innovative web applications and to learn from
							experienced professionals.
						</p>
					</div>
					<div className="lg:w-[40rem] lg:h-[40rem] mt-[5rem] lg:mt-[10rem] lg:order-2 md:flex md:justify-center ">
						<img
							src={EbenezerPortfolioOptimized}
							loading="lazy"
							alt="Ebenezer seated at his work desk in a modern office"
							className="rounded-[2rem] w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className="text-[#EAE4D5] mt-10 px-[1rem]">
					<button
						onClick={() => setShowSkills(!showSkills)}
						className="uppercase flex gap-3 items-center text-cyan-200 text-[1rem]"
					>
						{showSkills ? (
							<FaHandPointRight />
						) : (
							<FaHandPointDown className="transform scale-x-[-1]" />
						)}
						Skills
					</button>
					<AnimatePresence>
						{showSkills && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
								exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
								className="mt-4 space-y-4"
							>
								{skillCategories.map((category) => (
									<div
										key={category.title}
										className="px-[2rem] border-b-[0.1px] border-cyan-500 pt-2 pb-2"
									>
										<h4 className="text-[1.2rem] font-bold mb-2">
											{category.title}
										</h4>
										<ul className="text-[1rem] font-thin flex gap-3 items-center">
											{category.skills.map((skill) => (
												<li key={skill} className="flex items-center gap-2">
													<GoDotFill className="text-cyan-400" size={10} />
													<span>{skill}</span>
												</li>
											))}
										</ul>
									</div>
								))}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<div className="flex justify-center mt-20 mb-[10rem]">
					<a
						href="https://docs.google.com/document/d/1IrEwV7yAk8BnJbFFMpIwr2gZ8mIreHamtIgr1XtB6P0/view"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Download resume"
						className="inline-block uppercase text-cyan-200 border shadow-deep border-cyan-500 text-base px-6 py-3 rounded-full hover:bg-cyan-500 hover:text-[#0C0950] hover:font-bold transition-all duration-500"
					>
						Download my resume
					</a>
				</div>
				<BackToTop />
			</motion.div>
		</AnimatePresence>
	);
}
