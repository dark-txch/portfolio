import IphonePortfolio from "../assets/Projects/porfolio/iPhonePortfolio.png";
import IpadPortfolio from "../assets/Projects/porfolio/IpadPortfolio.png";

export default function Projects() {
	return (
		<div className=" w-screen h-auto flex flex-col px-[1rem] pt-[5rem] pb-[10rem]  border">
			<div className="bg-[#1c1860] w-full mx-auto p-[1rem] flex flex-col items-center border md:flex-row lg:flex-row">
				<div className="bg-[#FF90BB] w-full h-[10r] border flex justify-center space-x-2 p-[1rem]">
					<img
						src={IphonePortfolio}
						alt="IphonePortfolio"
						className="w-auto h-[50%] lg:h-[20rem]"
					/>
					<img
						src={IpadPortfolio}
						alt="IpadPortfolio"
						className="w-auto h-[50%] lg:h-[20rem]"
					/>
				</div>
				<div className="text-[#EAE4D5] text-[1.4rem] underline decoration-dashed">
					<h4>portfolio</h4>
				</div>
			</div>
		</div>
	);
}
