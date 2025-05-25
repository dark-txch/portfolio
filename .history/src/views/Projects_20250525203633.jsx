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

const projects = [
	// Bizpadi Project-----------------------------------
	{
		title: "Bizpadi",
		images: [
			{ src: macbookBizpadi, alt: "Macbook Bizpadi" },
			{ src: ipadBizpadi, alt: "iPad Bizpadi" },
			{ src: iPhoneBizpadi, alt: "iPhone Bizpadi" },
		],
		summary:
			// "My personal portfolio website built to showcase my frontend projects, skills, and contact information. It is fully responsive and built with modern tools.",
			"A book keeping app that enables small business owners track their sales and profit",
		tools: ["Vite", "React", "CSS", "GitHub Pages"],
		view:
		https://bizpadi.netlify.app/,
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
			"A responsive app that provides emergency response services. It includes features like service details, contact information, and a user-friendly interface.",
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
