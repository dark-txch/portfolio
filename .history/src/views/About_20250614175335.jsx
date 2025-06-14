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
		{ title: "Frameworks", skills: ["TAILWINDCSS"] },
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
				className="w-screen h-auto bg-[#33c9ff] font-tinos  leading-[2rem] text-[1.7rem] text-[#09063a] mb-[1rem] lg:text-[1.5rem] lg:px-[2rem]"
			>
				<div className="flex flex-col justify-center px-[1rem] lg:flex-row lg:gap-[5rem]">
					<div className="lg:w-full order-1">
						<h1 className="font-unna font-bold leading-[3rem] mt-[5rem] text-[2.5rem] text-cyan mb-[1.5rem] lg:text-[3rem]">
							Hello, I'm Ebenezer Tiewei
						</h1>
						<p className="mb-[1rem]">
							My journey into the world of software development was an
							unexpected one.
							{/* I made a decision to transition from a gym instructor and personal
							trainer to a software developer on May 17 2024 and it as been one
							of the best decisions i have made. */}
						</p>
						<p className="mb-[1rem]">
							Growing up, the world around me was lonely and dull, i struggled
							to fit in, making friends came easy for me but keeping them was a
							challenge, although i enjoy my own company and often play chess
							with myself, i soon realized that i needed to find a way to
							connect with others and football was my escape, it was a way for
							me to connect with others and keep the connection since we had a
							common interest, and to stay fit to play football, i had to get
							into the gym and i soon realised i enjoyed working out as it was a
							more relaxing way for me to let off any stress i was feeling. I
							soon took it on prefessionally and became a fitness instructor and
							personal trainer.
						</p>
						<p className="mb-[1rem]">
							Throughout my journey as a fitness instructor and personal
							trainer, I did lots of research to improve on myself has a trainer
							and to achieve my client goals.
						</p>
						<p className="mb-[1rem]">
							Through my research, i became fascinated with the world of
							software development, i was intrigued by the idea of creating
							something from nothing, giving it life and color to make it
							beautiful and responisive, this new fascination got me doing more
							research that was at first overwelming when finding out about the
							amount of technical skills required to be very good at it, but i
							am not the type to shy away from challenges, i just have to
							prepare my mind for it and like the Nike slogan{" "}
							<span className="font-bold uppercase">"Just do it"</span> so here
							i am doing it.
						</p>
						<p className="mb-[1rem]">
							The journey as been stormy but to help me navigate the storm, i
							enrolled at AltSchool Africa, where my passion for building
							visually pleasing and user-friendly web applications was ignited.
							Since then i have developed a strong interest in responsive
							design, accessibility, and creating refined web applications.
						</p>
						<p className="mb-[1rem]">
							So what do i enjoy about software development?
						</p>
						<ul className="list-disc list-inside mb-4">
							<li>The strong community</li>
							<li>The teamwork</li>
							<li>The creativity</li>
							<li>The problem solving</li>
							<li>The impactful tools used</li>
						</ul>
						<p className="mb-2">
							I love the magic and the impact the magic can have in our daily
							lives.
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
					<div className="mt-[5rem] lg:w-[40rem] lg:h-[40rem] lg:mt-[9rem] lg:order-2 md:flex md:justify-center ">
						<img
							src={EbenezerPortfolioOptimized}
							loading="lazy"
							alt="Ebenezer seated at his work desk in a modern office"
							className="rounded-[2rem] w-full h-full object-cover border-[2px] border-[#09063a]"
						/>
					</div>
				</div>
				<div className="text-[#09063a] mt-10 px-[1rem]">
					<button
						onClick={() => setShowSkills(!showSkills)}
						className="uppercase font-bold font-unna flex gap-3 items-center text-[1rem]"
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
										className="px-[2rem] font-unna border-b-[0.5px] border-[#09063a] pt-2 pb-2"
									>
										<h4 className="text-[1.2rem] font-bold mb-2">
											{category.title}
										</h4>
										<ul className="text-[1rem] flex gap-3 items-center">
											{category.skills.map((skill) => (
												<li key={skill} className="flex items-center gap-2">
													<GoDotFill size={10} />
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
				<div className="flex justify-center mt-20 pb-[10rem]">
					<a
						href="https://docs.google.com/document/d/1IrEwV7yAk8BnJbFFMpIwr2gZ8mIreHamtIgr1XtB6P0/view"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Download resume"
						className="inline-block uppercase text-cyan-200 bg-[#09063a] border shadow-deep border-cyan-500 text-base px-6 py-3 rounded-full hover:bg-[#33c9ff] hover:text-[#0C0950] hover:font-bold transition-all duration-500"
					>
						Download my resume
					</a>
				</div>
				<BackToTop />
			</motion.div>
		</AnimatePresence>
	);
}
