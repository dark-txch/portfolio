import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
	return (
		<>
			{/* portfolio project wrapper */}
			<div className="w-screen h-full ">
				{/* hero header  */}
				<header className="w-screen h-screen bg-gradient-to-b from-[#5409DA] to-[#4E71FF]">
					{/* Ebenezer container slidein down for mobile and slidein left for desktop */}
					<div className="relative w-screen h-[50%] ">
						<BackgroundVideo
							src="/video/gym-s.mp4"
							className="absolute top-0 left-0 w-screen h-[50%] object-cover"
						/>
						<h1 className="z-">Ebenezer</h1>
						{/* Tiewei container slidein up for mobile and slidein right for desktop */}
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
