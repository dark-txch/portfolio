import BackgroundVideo from "./components/BackgroundVideo";
import { useState } from "react";

function App() {
	const [slideOut, setSlideOut] = useState(false);

	const handleClick = () => {
		setSlideOut(!slideOut);
	};

	return (
		<>
			{/* portfolio project wrapper */}
			<div className="w-screen h-full ">
				{/* hero header  */}
				<header className="w-screen h-[100vh] bg-gradient-to-b from-[#5409DA] to-[#4E71FF] overflow-hidden lg:flex lg:justify-center lg:items-center">
					{/* EBENEZER top and left container slidein down for mobile and slidein left for desktop */}
					<div
						className={`relative w-screen h-[50dvh] flex flex-col justify-end items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] transition-all duration-500 ease-in-out ${
							slideOut
								? "-translate-y-full lg:-translate-y-0 lg:-translate-x-full"
								: ""
						}`}
					>
						<BackgroundVideo
							src="/video/gym-s.mp4"
							className="absolute top-0 left-0 w-screen h-[100%] object-cover object-[0_20%]"
						/>
						<div className="relative flex justify-between items-end w-full px-[1rem] overflow-hidden lg:flex lg:flex-col lg:items-end lg:px-0">
							<h1 className="text-white w-[7rem] pb-[0.5rem] lg:w-[15rem] lg:pr-[1rem] lg:text-right lg:text-[2rem] lg:order-5">
								Ebenezer
							</h1>

							{/* ----------------------------------------------------------- */}
							<button
								onClick={handleClick}
								className="relative top-[1.8rem] text-[#b9b9b9] text-[1.3rem] font-bold bg-[#CB0404] mx-[1rem] rounded-t-[5rem] border-[0.8rem] border-[#3A0519] w-[5rem] h-[4.5rem] cursor-pointer lg:top-auto lg:mx-0 lg:rounded-tl-[3rem] lg:rounded-bl-[3rem] lg:rounded-t-none lg:my-[1rem] lg:left-[2.7rem] lg:uppercase lg:order-1"
							>
								<span className="lg:hidden absolute top-[0.9rem] left-1">
									click
								</span>
							</button>
							{/* ----------------------------------------------------------- */}

							<h4 className="text-[0.8rem] text-white text-right pr-[0.6rem] uppercase w-[7rem]  pb-[0.5rem] lg:w-[15rem] lg:pl-[1rem] lg:text-[2rem]">
								Frontend
							</h4>
						</div>
					</div>

					{/* TIEWEI butttom and right container slidein up for mobile and slidein right for desktop */}
					<div
						className={`relative w-screen h-[50dvh] flex flex-col justify-start items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] transition-all duration-500 ease-in-out ${
							slideOut
								? "translate-y-full lg:-translate-y-0 lg:translate-x-full"
								: ""
						}`}
					>
						<BackgroundVideo
							src="/video/tech-s.mp4"
							className="absolute bottom-0 left-0 w-screen h-full object-cover object-[0_90%] lg:w-[50vw] lg:h-[100vh]"
						/>
						{/* Content inside Tiewei section */}
						<div className="relative flex justify-between items-start w-full px-[1rem] overflow-hidden lg:flex lg:flex-col lg:items-start lg:px-0">
							<h1 className="text-white w-[7rem] pt-[0.5rem] lg:pt-0 lg:pb-[0.5rem] lg:w-[15rem] lg:pl-[1rem] lg:text-[2rem]">
								Tiewei
							</h1>

							{/* ----------------------------------------------------------- */}
							<button
								onClick={handleClick}
								className="relative bottom-[2rem] text-[#b9b9b9] text-[1.3rem] font-bold bg-[#CB0404]  rounded-b-[5rem] border-[0.8rem] border-[#3A0519] w-[5rem] h-[4.5rem] cursor-pointer overflow-hidden lg:bottom-auto lg:mx-0 lg:rounded-b-none lg:rounded-tr-[3rem] lg:rounded-br-[3rem] lg:my-[1rem] lg:right-[2.7rem] lg:uppercase"
							>
								<span className="lg:hidden absolute top-[0.1rem] left-1">
									click
								</span>
							</button>
							{/* ----------------------------------------------------------- */}

							<h4 className="text-[0.8rem] text-white text-right pr-[0.3rem] uppercase w-[7rem]  pt-[0.5rem] lg:text-left lg:pb-[0.5rem] lg:pt-0 lg:w-[15rem] lg:pl-[1rem] lg:text-[2rem] ">
								Developer
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
