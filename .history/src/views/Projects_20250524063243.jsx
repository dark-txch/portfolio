import IphonePortfolio from "../assets/Projects/porfolio/iPhonePortfolio.png";
import IpadPortfolio from "../assets/Projects/porfolio/IpadPortfolio.png";

export default function Projects() {
	return (
		<div className=" w-screen h-auto flex flex-col">
			<div className="bg-[#1c1860] w-[90%] mx-auto mt-[5rem] mb-[10rem] p-[1rem] flex flex-col item border">
				<div className="border flex space-x-5 p-[1rem]">
					<img
						src={IphonePortfolio}
						alt="IphonePortfolio"
						className="w-auto h-[10rem]"
					/>
					<img
						src={IpadPortfolio}
						alt="IpadPortfolio"
						className="w-auto h-[10rem]"
					/>
				</div>
				<div className="">
					<h4>portfolio</h4>
				</div>
			</div>
		</div>
	);
}
