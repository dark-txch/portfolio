import IphonePortfolio from "../assets/Projects/porfolio/iPhonePortfolio.png";
import IpadPortfolio from "../assets/Projects/porfolio/"

export default function Projects() {
	return (
		<div className="w-screen h-auto flex flex-col">
			<div className="w-[90%] flex">
				<div className="border">
					<div className="w-[10rem] h-auto">
						<img src={IphonePortfolio} alt="IphonePortfolio" />
					</div>
					<div className="w-[10rem] h-auto"></div>
				</div>
				<div></div>
			</div>
		</div>
	);
}
