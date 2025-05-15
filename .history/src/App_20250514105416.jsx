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

						{/* Text Background */}
						<h1 className="absolute w-full text-center pointer-events-none z-0">
							<span className="text-[1.5rem] lg:text-[3rem] text-white uppercase opacity-40">
								Ebenezer
							</span>
							<span className="text-[1.5rem] lg:text-[3rem] text-white uppercase opacity-40 ml-12">
								Tiewei
							</span>
						</h1>

						{/* Interactive Content */}
						<div className="relative z-10 flex flex-col items-center w-full px-[1rem]">
							<button className="text-white bg-red-500 w-[4rem] h-[6rem] relative -top-4">
								Open
							</button>

							<h4 className="mt-8">
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
								<span className="text-[1.5rem] text-white hidden">
									Ebenezer
								</span>
								<span className="text-[1.5rem] text-white hidden">Tiewei</span>
							</h1>
							<h4 className="border-2 border-solid border-green-500 w-full flex justify-between items-center text-[1.2rem]">
								<span className="text-white uppercase order-2">Developer</span>
								<span className="text-white uppercase order-1">Front end</span>
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
