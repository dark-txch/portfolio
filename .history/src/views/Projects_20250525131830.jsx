// pages/Projects.jsx
import ProjectCard from "../components/ProjectCard";
import macbookBizpadi from "../assets/Projects/bizpadi/macbookBizpadi.app.png";
import ipadBizpadi from "../assets/Projects/bizpadi/iPadBizpadi.app.png";
import iPhoneBizpadi from "../assets/Projects/bizpadi/iPhoneBizpadi.app.png";

const projects = [
	{
		images: [
			{ src: macbookBizpadi, alt: "Macbook Bizpadi" },
			{ src: ipadBizpadi, alt: "iPad Bizpadi" },
			{ src: iPhoneBizpadi, alt: "iPhone Bizpadi" },
		],
		summary:
			"My personal portfolio website built to showcase my frontend projects, skills, and contact information. It is fully responsive and built with modern tools.",
		tools: ["Vite", "React", "Tailwind CSS", "GitHub Pages"],
	},
	// Add more projects here
];

export default function Projects() {
	return (
		<div className="w-screen h-auto flex flex-col px-[1rem] pt-[5rem] pb-[10rem] gap-[3rem]">
			{projects.map((project, idx) => (
				<ProjectCard
					key={idx}
					images={project.images}
					summary={project.summary}
					tools={project.tools}
				/>
			))}
		</div>
	);
}
