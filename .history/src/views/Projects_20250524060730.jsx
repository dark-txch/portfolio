import IphonePortfolio from "../assets/Projects/porfolio/iPhonePortfolio.png";
import IpadPortfolio from "../assets/Projects/porfolio/IpadPortfolio.png";

export default function Projects() {
	return (
		<div className="w-screen h-auto flex flex-col">
			<div className="w-[90%] mx-auto flex border">
				<div className="bg-[#1c1860] w-full border flex space-x-5 p-[2rem] py-[]">
					<img
						src={IphonePortfolio}
						alt="IphonePortfolio"
						className="w-[20] h-auto"
					/>
					<img
						src={IpadPortfolio}
						alt="IpadPortfolio"
						className="w-auto h-[20rem]"
					/>
				</div>
				<div></div>
			</div>
		</div>
	);
}
