import Ebenezer from "../assets/Ebenezer.png";
import { FaHandPointRight, FaHandPointDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";

export default function About() {
	const [showSkills, setShowSkills] = useState(false);

	const skillCategories = [
		{ title: "Languages", skills: ["HTML", "CSS", "JAVASCRIPT"] },
		{ title: "Libraries", skills: ["REACT"] },
		{ title: "Frameworks", skills: ["Tailwind CSS"] },
		{ title: "Tools", skills: ["GIT", "VSCODE", "FIGMA"] },
	];

	return (
		<div className="w-screen h-auto bg-[#09063a] text-[1.4rem] pb-[5rem] lg:text-[1.6rem] lg:px-[3rem]">
			<div className="flex flex-col justify-center lg:flex-row">
				<div className="lg:w-[70%] order-1">
					<h1 className="font-unna font-bold text-cyan-200 px-[1rem] leading-[3rem] mt-[5rem] text-[2.5rem] mb-[1.5rem] lg:text-[3rem]">
						Hello, I'm Ebenezer Tiewei &#x1F44B;
					</h1>
					<p className="font-thin text-[#EAE4D5] leading-[2.5rem] px-[1rem] mb-[2rem]">
						I made a decision to transition from a gym instructior and personal
						trainer to a software developer on the 17th of May 2024 and it as
						been one of the best decisions i have made.
					</p>
					<p className="font-thin text-[#EAE4D5] leading-[2.5rem] px-[1rem] mb-[2rem]">
						My journey started at AltSchool Africa, where I immersed myself in
						the world of web development. I quickly discovered my passion for
						building visually pleasing and user-friendly web applications. I
						have developed a strong interest in responsive design,
						accessibility, and creating refined web applications.
					</p>
					<p className="font-thin text-[#EAE4D5] leading-[2.5rem] px-[1rem] mb-[2rem]">
						My goal is to develop a deep understanding of the principles of
						software development and to become a proficient software engineer.
					</p>
					<p className="font-thin text-[#EAE4D5] leading-[2.5rem] px-[1rem] mb-[2rem]">
						I am actively seeking opportunities to work on exciting projects and
						collaborate with talented individuals in the tech industry.
					</p>
					<p className="font-thin text-[#EAE4D5] leading-[2.5rem] px-[1rem] mb-[2rem]">
						I am particularly interested in roles that allow me to contribute to
						the development of innovative web applications and to learn from
						experienced professionals.
					</p>
				</div>
				<div className="lg:w-[30%] mt-[2rem] lg:mt-0 lg:pt-[5rem] lg:order-2 ">
					<img src={Ebenezer} alt="Ebenezer" />
				</div>
			</div>
			<div className="text-[#EAE4D5] mt-10 px-[1rem]">
				<button
					onClick={() => setShowSkills(!showSkills)}
					className="uppercase flex gap-3 items-center text-cyan-200 text-[1rem]"
				>
					<FaHandPointRight /> Skills
				</button>

				{showSkills && (
					<div className="mt-6 space-y-6">
						{skillCategories.map((category) => (
							<div key={category.title} className="px-[2rem]">
								<h4 className="text-[1.2rem] font-bold mb-3">
									{category.title}
								</h4>
								<ul className="text-[1rem] font-thin flex gap-3 items-center">
									{category.skills.map((skill) => (
										<li key={skill} className="flex items-center gap-2">
											<GoDotFill className=" text-cyan-400" size={10} />
											<span>{skill}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				)}
			</div>
			<div className="flex justify-center mt-20 pb-[5rem]">
				<a
					href="https://docs.google.com/document/d/1IrEwV7yAk8BnJbFFMpIwr2gZ8mIreHamtIgr1XtB6P0/view"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="resume"
					className="inline-block uppercase text-cyan-200 border border-cyan-500 text-[1rem] px-6 py-3 rounded-[10rem] hover:bg-cyan-500 hover:text-[#0C0950] transition-all duration-500"
				>
					Download my resume
				</a>
			</div>
		</div>
	);
}
