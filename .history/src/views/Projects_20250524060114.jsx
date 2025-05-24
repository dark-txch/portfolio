import IphonePortfolio from "../assets/Projects/porfolio/iPhonePortfolio.png";
import IpadPortfolio from "../assets/Projects/porfolio/IpadPortfolio.png";

export default function Projects() {
	return (
		<div className="w-screen h-auto flex flex-col">
			<div className="w-[90%] flex border">
				<div className="border flex space-x-5">
					<img
						src={IphonePortfolio}
						alt="IphonePortfolio"
						className="w-[10rem] h-auto"
					/>
					<img
						src={IpadPortfolio}
						alt="IpadPortfolio"
						className=""
					/>
				</div>
				<div></div>
			</div>
		</div>
	);
}
