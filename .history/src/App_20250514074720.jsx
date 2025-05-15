import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
	return (
		<>
			{/* portfolio project wrapper */}
			<div className="w-screen h-full ">
				{/* hero header  */}
				<header className="w-screen h-[100vh] bg-gradient-to-b from-[#5409DA] to-[#4E71FF] lg:flex lg:justify-center lg:items-center">
					{/* Ebenezer container slidein down for mobile and slidein left for desktop */}
					<div className="relative w-screen h-[50dvh] flex flex-col justify-end items-center lg:h-[100vh] lg:w-[50vw]">
						<BackgroundVideo
							src="/video/gym-s.mp4"
							className="absolute top-0 left-0 w-screen h-[100%] object-cover object-[0_20%]"
						/>
						<div className="flex justify-between items-center w-full px-[2rem] lg:flex lg:flex-col lg:justify-normal">
							<h1 className="relative text-[1.5rem] lg:text-[3rem] text-white flex justify-between w-[100vw] lg:flex-initial lg:justify-center">
								<span>

								</span>
								<span className="lg:hidden">Tiewei</span>
							</h1>
							<h4 className="relative text-[1rem] text-white hidden lg:block">
								Front End
							</h4>
						</div>
						{/* this container is for large screens */}
						<span className="hidden lg:inline">
							<p>
								<MdKeyboardDoubleArrowDown />
								scroll
							</p>
						</span>
					</div>

					{/* Tiewei container slidein up for mobile and slidein right for desktop */}
					<div className="relative w-screen h-[50dvh] flex flex-col justify-start items-center lg:h-[100vh] lg:w-[50vw] lg:justify-center">
						<BackgroundVideo
							src="/video/tech-s.mp4"
							className="absolute bottom-0 left-0 w-screen h-[100%] object-cover object-[0_90%] lg:w-[50vw] lg:h-[100vh]"
						/>
						{/* container for small screens*/}
						<div className="flex justify-between items-center w-full px-[2rem] lg:flex lg:flex-col">
							<h1 className="relative text-[2rem] text-white hidden lg:block">
								Tiewei
							</h1>
							<h4 className="relative text-[1.1rem] text-white flex justify-between w-[100vw]">
								<span>Developer</span>
								<span className="order-[-1]">Front end</span>
							</h4>
						</div>
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
