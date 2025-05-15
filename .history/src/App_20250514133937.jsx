import BackgroundVideo from "./components/BackgroundVideo";

function App() {
	return (
		<>
			{/* portfolio project wrapper */}
			<div className="w-screen h-full ">
				{/* hero header  */}
				<header className="w-screen h-[100vh] bg-gradient-to-b from-[#5409DA] to-[#4E71FF] lg:flex lg:justify-center lg:items-center">
					{/* EBENEZER top and left container slidein down for mobile and slidein left for desktop */}
					<div className="relative w-screen h-[50dvh] flex flex-col justify-end items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] ">
						<BackgroundVideo
							src="/video/gym-s.mp4"
							className="absolute top-0 left-0 w-screen h-[100%] object-cover object-[0_20%]"
						/>
						<div className="relative flex justify-between items-end w-full px-[1rem] lg:border-[0.3rem] lg:border-solid border-red-500">
							<h1 className="text-white w-[7rem] pb-[0.5rem] border-[0.3rem] border-solid border-red-500">
								Ebenezer
							</h1>

							{/* ----------------------------------------------------------- */}
							<button className="relative top-[1.8rem] text-[#b9b9b9] text-[1.3rem] font-bold bg-[#59221c] mx-[1rem] rounded-t-[5rem] border-[0.5rem] border-[#BE5B50] w-[5.5rem] h-[5rem]">
								click
							</button>
							{/* ----------------------------------------------------------- */}

							<h4 className="text-[0.8rem] text-white text-right pr-[0.3rem] uppercase w-[7rem]  pb-[0.5rem] border-[0.3rem] border-solid border-red-500">
								Frontend
							</h4>
						</div>
					</div>

					{/* TIEWEI butttom and right container slidein up for mobile and slidein right for desktop */}
					<div className="relative w-screen h-[50dvh] flex flex-col justify-start items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw]">
						<BackgroundVideo
							src="/video/tech-s.mp4"
							className="absolute bottom-0 left-0 w-screen h-full object-cover object-[0_90%] lg:w-[50vw] lg:h-[100vh]"
						/>
						{/* Content inside Tiewei section */}
						<div className="relative flex justify-between items-start w-full px-[1rem] overflow-hidden lg:flex lg:flex-col lg:items-start lg:border-2 lg:border-solid lg:border-red-500">
							<h1 className="text-white w-[7rem] pt-[0.5rem] border-[0.3rem] border-solid border-red-500">
								Tiewei
							</h1>

							{/* ----------------------------------------------------------- */}
							<button className="relative bottom-[2rem] text-[#b9b9b9] text-[1.3rem] font-bold bg-[#59221c]  rounded-b-[5rem] border-[0.5rem] border-[#BE5B50] w-[5.5rem] h-[5rem]">
								me
							</button>
							{/* ----------------------------------------------------------- */}
							<h4 className="text-[0.8rem] text-white text-right pr-[0.3rem] uppercase w-[7rem]  pt-[0.5rem] border-[0.3rem] border-solid border-red-500">
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
