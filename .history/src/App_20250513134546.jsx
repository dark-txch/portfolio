import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
	return (
		<>
			{/* portfolio wrapper  */}
			<div className="portfolioWrapper w-screen h-full ">
				{/*  header door slide in */}
				<header className="heroHeader w-screen h-screen bg-gradient-to-b from-[#5409DA] to-[#4E71FF]">
					<div className="headerDoorSlide relative">
						<BackgroundVideo
							src="/video/gym-s.mp4"
							className="absolute top-0 left-0 w-screen h-[50%] object-cover z-[-1] opacity-70"
						/>
						<h1>Ebenezer</h1>
						<div className="leftLock"></div>
						<h4>Front End</h4>

						<span>
							<p>
								<MdKeyboardDoubleArrowDown />
								scroll
							</p>
						</span>
					</div>
					<div className="headerDoorSlideRight">
						<h1>Tiewei</h1>
						<div className="rightLock"></div>
						<h4>Developer</h4>
					</div>
				</header>

				{/* main body */}
				<main>
					<header></header>
				</main>
				<footer></footer>
			</div>
		</>
	);
}

export default App;
