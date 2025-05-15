import BackgroundVideo from "./components/BackgroundVideo";

function App() {
	return (
		<>
			{/* portfolio project wrapper */}
			<div className="w-screen h-full ">
				{/* hero header  */}
				<header className="w-screen h-[100vh] bg-gradient-to-b from-[#5409DA] to-[#4E71FF] lg:flex lg:justify-center lg:items-center">
					{/* EBENEZER top and left container slidein down for mobile and slidein left for desktop */}
					<div className="relative w-screen h-[50dvh] flex flex-col justify-end items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw]">
						<BackgroundVideo
							src="/video/gym-s.mp4"
							className="absolute top-0 left-0 w-screen h-[100%] object-cover object-[0_20%]"
						/>
						<div className="relative flex justify-between items-center w-full px-[1rem] lg:flex lg:flex-col lg:items-end lg:border-2 lg:border-solid lg:border-red-500">
							<h1 className="w-full flex justify-between items-end overflow-hidden">
								<span className="text-[1.1rem] text-white uppercase w-[7rem] pb-[0.5rem] border-[0.3rem] border-solid border-red-500">
									Ebenezer
								</span>
								{/* ----------------------------------------------------------- */}
								<button className="relative top-[1.8rem] text-white text-[1.3rem] bg-red-500 p-[1rem] mx-[1rem] rounded-t-[5rem] border-[0.5rem]">
									click
								</button>
								{/* ----------------------------------------------------------- */}
								<span className="text-[1.1rem] text-white text-left uppercase w-[7rem]  pb-[0.5rem] border-[0.3rem] border-solid border-red-500">
									Tiewei
								</span>
							</h1>
							<h4 className="">
								<span className="text-white hidden">Developer</span>
								<span className="text-white hidden">Front end</span>
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
						<div className="relative flex justify-between items-center w-full px-[1rem] lg:flex lg:flex-col lg:items-start lg:border-2 lg:border-solid lg:border-red-500">
							<h1>
								<span className="text-[1.1rem] text-white hidden">
									Ebenezer
								</span>
								<span className="text-[1.1rem] text-white hidden">Tiewei</span>
							</h1>
							<h4 className="w-full flex justify-between items-start text-[0.8rem] overflow-hidden">
								<span className="text-white uppercase order-3 pt-[0.5rem] w-[7rem] border-[0.3rem] border-solid border-red-500">
									Developer
								</span>
								{/* ----------------------------------------------------------- */}
								<button className="order-2 relative bottom-[1rem] text-white text-[1.3rem] bg-red-500  rounded-b-[5rem] border-[0.5rem] w-[5rem] h-[]">
									me
								</button>
								{/* ----------------------------------------------------------- */}
								<span className="text-white uppercase order-1 pt-[0.5rem] w-[7rem] border-[0.3rem] border-solid border-red-500">
									Front end
								</span>
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
