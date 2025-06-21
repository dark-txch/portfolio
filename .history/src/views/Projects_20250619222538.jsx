import BackToTop from "../Reusable/BackToTop";

// pages/Projects.jsx
import ProjectStand from "../components/ProjectStand";
// Bizpadi Project-------------------------------------
import macbookBizpadi from "../assets/Projects/bizpadi/macbookBizpadi.app.webp";
import ipadBizpadi from "../assets/Projects/bizpadi/iPadBizpadi.webp";
import iPhoneBizpadi from "../assets/Projects/bizpadi/iPhoneBizpadi.app.webp";
//  ResQ Project---------------------------------------
import MacbookResq from "../assets/Projects/resq/MacbookResq.png";
import ipadResq from "../assets/Projects/resq/iPadResq.png";
import iphoneResq from "../assets/Projects/resq/iPhoneResq.png";
//  Portfolio Project--------------------------------
import MacboookPortfolio from "../assets/Projects/porfolio/MacbookPortfolio.webp";
import ipadPortfolio from "../assets/Projects/porfolio/iPadPortfolio.webp";
import iPhonePortfolio from "../assets/Projects/porfolio/iPhonePortfolio.webp";

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
			"This project is bookkeeping web-applica designed to help small business owners track their sales and profit effortlessly.",
		tools: ["Vite", "React", "CSS", "Git"],
		view: "https://bizpadi.netlify.app/",
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
			"An emergency response app that sends out an emergency alert to your love ones and the right authorities, when you feel unsafe.",
		tools: ["Vite", "React", "CSS", "Git"],
		view: "https://resq-co.netlify.app/",
	},
	// Portfolio Project-----------------------------------
	{
		title: "Portfolio",
		images: [
			{ src: MacboookPortfolio, alt: "Macbook Portfolio" },
			{ src: ipadPortfolio, alt: "iPad Portfolio" },
			{ src: iPhonePortfolio, alt: "iPhone Portfolio" },
		],
		summary:
			"My personal portfolio website showcasing my skills, projects and contact for collaboration.",
		tools: ["Vite", "React", "Tailwind CSS", "Git"],
		view: "https://ebenezertiewei.netlify.app/",
	},
];

export default function Projects() {
	return (
		<div className="w-screen h-auto bg-[#33c9ff] font-tinos  leading-[2rem] px-[1rem] grid grid-cols-1 gap-[1rem] pt-[5rem] pb-[10rem] lg:px-[2rem] lg:grid-cols-2">
			{projects.map((project, idx) => (
				<ProjectStand
					key={idx}
					title={project.title}
					images={project.images}
					summary={project.summary}
					tools={project.tools}
					view={project.view}
				/>
			))}
			<BackToTop />
		</div>
	);
}
