import BackgroundVideo from "../components/BackgroundVideo";

const Hero = ({ slideOut, onEnter }) => {
	const handleClick = () => {
		onEnter(); // Trigger slideOut and removal
	};

	return (
		<div
			className={`w-screen ${
				slideOut
					? "relative h-full overflow-auto"
					: "fixed h-screen overflow-hidden inset-0"
			}`}
		>
			<div className="w-screen min-h-screen max-h-screen overflow-hidden bg-gradient-to-b from-[#5409DA] to-[#4E71FF] flex flex-col lg:flex-row">
				{/* EBENEZER container */}
				<div
					className={`relative w-screen h-[50dvh] flex flex-col justify-end items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] will-change-transform transition-all duration-1000 ease-in-out z-50  ${
						slideOut
							? "-translate-y-[200%] lg:-translate-y-0 lg:-translate-x-full"
							: ""
					}`}
				>
					<BackgroundVideo
						src="/video/gym-s.mp4"
						className="absolute top-0 left-0 w-screen h-[100%] object-cover object-[0_20%]"
					/>
					<div className="relative flex justify-between items-end w-full px-[1rem] overflow-hidden lg:flex lg:flex-col lg:items-end lg:px-0">
						<h1 className="text-[#60B5FF] text-[1.3rem] uppercase font-bold w-[7rem] pb-[0.5rem] lg:w-[15rem] lg:pr-[1rem] lg:text-right lg:text-[1.5rem] lg:order-5">
							Ebenezer
						</h1>

						{/* Button */}
						<button
							onClick={handleClick}
							className="relative top-[1.5rem] text-[#60B5FF] text-[1.1rem] font-bold bg-[#CB0404] mx-[1rem] rounded-t-[5rem] border-[2px] border-[#60B5FF] cursor-pointer w-[3.1rem] h-[3.2rem}md-w-[10rem] lg:w-[5rem] lg:h-[4.5rem] lg:top-auto lg:mx-0 lg:rounded-tl-[3rem] lg:rounded-bl-[3rem] lg:rounded-t-none lg:my-[1rem] lg:left-[2.7rem] lg:uppercase lg:order-1 motion-preset-pulse motion-duration-2000"
						></button>

						<h4 className="text-[1.3rem] text-[#60B5FF] font-bold text-right pr-[0.6rem] uppercase w-[7rem] pb-[0.5rem] lg:w-[15rem] lg:pl-[1rem] lg:text-[2.5rem] lg:order-4">
							Frontend
						</h4>
					</div>
				</div>

				{/* TIEWEI container */}
				<div
					className={`relative w-screen h-[50dvh] flex flex-col justify-start items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] will-change-transform transition-all duration-1000 ease-in-out z-50 ${
						slideOut
							? "translate-y-[200%] lg:-translate-y-0 lg:translate-x-full"
							: ""
					}`}
				>
					<BackgroundVideo
						src="/video/tech-s.mp4"
						className="absolute bottom-0 left-0 w-screen h-full object-cover object-[0_90%] lg:w-[50vw] lg:h-[100vh]"
					/>
					<div className="relative flex justify-between items-start w-full px-[1rem] overflow-hidden lg:flex lg:flex-col lg:items-start lg:px-0">
						<h1 className="text-[#60B5FF] text-[1.3rem] font-bold uppercase w-[7rem] pt-[0.5rem] lg:pt-0 lg:pb-[0.5rem] lg:w-[15rem] lg:pl-[1rem] lg:text-[1.5rem] lg:order-5">
							Tiewei
						</h1>

						{/* Button */}
						<button
							onClick={handleClick}
							className="relative bottom-[1.6rem] text-[#60B5FF] text-[1.1rem] font-bold bg-[#CB0404] rounded-b-[5rem] border-[2px] border-[#60B5FF] cursor-pointer overflow-hidden w-[3.1rem] h-[3.2rem] lg:w-[5rem] lg:h-[4.5rem] lg:bottom-auto lg:mx-0 lg:rounded-b-none lg:rounded-tr-[3rem] lg:rounded-br-[3rem] lg:my-[1rem] lg:right-[2.7rem] lg:uppercase lg:order-1 motion-preset-pulse motion-duration-2000"
						></button>

						<h4 className="text-[1.3rem] text-[#60B5FF] font-bold text-right pr-[0.3rem] uppercase w-[7rem] pt-[0.5rem] lg:text-left lg:pb-[0.5rem] lg:pt-0 lg:w-[15rem] lg:pl-[1rem] lg:text-[2.5rem] lg:order-4">
							Developer
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
