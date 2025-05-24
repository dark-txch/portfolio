import IphonePortfolio from "../assets/Projects/porfolio/iPhonePortfolio.png";
import IpadPortfolio from "../assets/Projects/porfolio/IpadPortfolio.png";
import MacbookPortfolio from "../assets/Projects/porfolio/MacbookPortfolio.png"
import { FaHandPointRight, FaHandPointDown } from "react-icons/fa";

export default function Projects() {
	return (
		<div className=" w-screen h-auto flex flex-col px-[1rem] pt-[5rem] pb-[10rem]  border">
			<div className="bg-[#1c1860] w-full mx-auto p-[1rem] flex flex-col items-center border md:flex-row lg:flex-row">
				<div className="bg-[#FF90BB] w-full h-[18rem] border flex justify-center space-x-2 p-[1rem] lg:w-[90%] lg:h-[25rem] lg:space-x-10">
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
					<img src="" alt="Macb" />
				</div>
				<div className=" w-full">
					<h4 className="font-unna font-bold  text-[1.5rem] text-center text-cyan-200 underline decoration-dashed mb-[1rem]">
						portfolio
					</h4>
					<div>
						<button className="uppercase flex gap-3 items-center text-cyan-200 text-[1rem]">
							<FaHandPointRight />
							summary
						</button>
					</div>
					<div>
						<button className="uppercase flex gap-3 items-center text-cyan-200 text-[1rem]">
							<FaHandPointRight />
							tools
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
