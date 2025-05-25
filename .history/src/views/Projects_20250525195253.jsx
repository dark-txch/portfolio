// pages/Projects.jsx
import ProjectStand from "../components/ProjectStand";
// Bizpadi Project-------------------------------------
import macbookBizpadi from "../assets/Projects/bizpadi/macbookBizpadi.app.png";
import ipadBizpadi from "../assets/Projects/bizpadi/iPadBizpadi.app.png";
import iPhoneBizpadi from "../assets/Projects/bizpadi/iPhoneBizpadi.app.png";
//  ResQ Project---------------------------------------
import MacbookResq from "../assets/Projects/resq/MacbookResq.png";
import ipadResq from "../assets/Projects/resq/iPadResq.png";
import iphoneResq from "../assets/Projects/resq/iPhoneResq.png";
import { title } from "framer-motion/client";

const projects = [
	// Bizpadi Project-----------------------------------
	{
		images: [
			{ src: macbookBizpadi, alt: "Macbook Bizpadi" },
			{ src: ipadBizpadi, alt: "iPad Bizpadi" },
			{ src: iPhoneBizpadi, alt: "iPhone Bizpadi" },
		],
		summary:
			"My personal portfolio website built to showcase my frontend projects, skills, and contact information. It is fully responsive and built with modern tools.",
		tools: ["Vite", "React", "CSS", "GitHub Pages"],
	},
	// ResQ Project-----------------------------------
	{
		title: "ResQ",
		images: [
			{ src: MacbookResq, alt: "Macbook ResQ" },
			{ src: ipadResq, alt: "iPad ResQ" },
			{ src: iphoneResq, alt: "iPhone ResQ" },
		],
		summary:
			"A responsive website that provides emergency response services. It includes features like service details, contact information, and a user-friendly interface.",
		tools: ["Vite", "React", "CSS", "GitHub Pages"],
	},
];

export default function Projects() {
	return (
		<div className="w-screen h-auto flex flex-col px-[1rem] pt-[5rem] pb-[10rem] gap-[3rem] lg:flex-row">
			{projects.map((project, idx) => (
				<ProjectStand
					key={idx}
					title={project.title}
					images={project.images}
					summary={project.summary}
					tools={project.tools}
				/>
			))}
		</div>
	);
}
