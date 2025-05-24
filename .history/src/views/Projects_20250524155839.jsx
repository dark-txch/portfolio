import IphonePortfolio from "../assets/Projects/porfolio/iPhonePortfolio.png";
import IpadPortfolio from "../assets/Projects/porfolio/IpadPortfolio.png";
import MacbookPortfolio from "../assets/Projects/porfolio/MacbookPortfolio.png";
import { FaHandPointRight, FaHandPointDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";




export default function Projects() {
	const [projectPortfolio, setProjectPortfolio] = useState(false);
	const portfolioSummary = [
		{
			summary:
			  "A personal portfolio website built to showcase my frontend projects, skills, and contact information. Fully responsive, built with modern tools, and includes interactive UI elements.",
			tools: ["Vite", "React", "Tailwind CSS", "GitHub Pages"],
		  }
	]



	return (
		<div className=" w-screen h-auto flex flex-col px-[1rem] pt-[5rem] pb-[10rem]  border">
			<div className="bg-[#1c1860] w-full mx-auto p-[1rem] flex flex-col items-center border">
				<div className="bg-[#1DCD9F] w-full h-[18rem] border flex justify-center space-x-2 p-[1rem] mb-[1rem] lg:h-[25rem] lg:space-x-5">
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
					<div>
						<button onClick={() => setProjectPortfolio(!)} className="uppercase flex gap-3 items-center text-cyan-200 text-[1rem]">
							{<FaHandPointDown /> : <FaHandPointRight /> }
							details
						</button>
					</div>
					<div>
						<button></button>
					</div>
				</div>
			</div>
		</div>
	);
}
