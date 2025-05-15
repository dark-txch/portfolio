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
						<div className="relative flex justify-between items-center w-full px-[2rem] lg:flex lg:flex-col lg:items-end lg:border-2 lg:border-solid lg:border-red-500">
							<h1 className="border-2 border-solid border w-screen">
								<span className="text-[2rem] text-white">Ebenezer</span>
								<span className="text-[2rem] text-white lg:hidden">Tiewei</span>
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
						<div className="relative flex justify-between items-center w-full px-[2rem] lg:flex lg:flex-col lg:items-start lg:border-2 lg:border-solid lg:border-red-500">
							<h1>
								<span className="text-[2rem] text-white">Ebenezer</span>
								<span className="text-[2rem] text-white lg:hidden">Tiewei</span>
							</h1>
							<h4 className="">
								<span className="text-white">Developer</span>
								<span className="text-white">Front end</span>
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
