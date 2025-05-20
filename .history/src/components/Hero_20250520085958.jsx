import React, { useState, useEffect } from "react";
import BackgroundVideo from "./BackgroundVideo"; // Adjust if needed

const Hero = ({ onEnter }) => {
	const [slideOut, setSlideOut] = useState(false);
	const [mainSlideUp, setMainSlideUp] = useState(false);

	useEffect(() => {
		document.body.style.overflow = slideOut ? "auto" : "hidden";
	}, [slideOut]);

	const handleClick = () => {
		if (!slideOut) {
			setSlideOut(true);
			setTimeout(() => {
				setMainSlideUp(true);
				if (onEnter) {
					onEnter(); // Tells Layout to show main content
				}
			}, 1000); // match your animation duration
		}
	};

	return (
		<div
			className={`w-screen ${
				slideOut
					? "relative h-full overflow-auto"
					: "fixed h-screen overflow-hidden inset-0"
			}`}
		>
			<header className="w-screen min-h-screen max-h-screen overflow-hidden bg-gradient-to-b from-[#5409DA] to-[#4E71FF] flex flex-col lg:flex-row">
				{/* Ebenezer container */}
				<div
					className={`relative w-screen h-[50dvh] flex flex-col justify-end items-center lg:h-[100vh] lg:w-[50vw] will-change-transform transition-all duration-1000 ease-in-out z-50 ${
						slideOut
							? "-translate-y-[200%] lg:-translate-y-0 lg:-translate-x-full"
							: ""
					}`}
				>
					<BackgroundVideo
						src="/video/gym-s.mp4"
						className="absolute top-0 left-0 w-screen h-[100%] object-cover object-[0_20%]"
					/>
					<div className="relative flex justify-between items-end w-full px-[1rem] lg:flex lg:flex-col lg:items-end lg:px-0">
						<h1 className="text-[#60B5FF] text-[1.3rem] uppercase font-bold w-[7rem] pb-[0.5rem] lg:w-[15rem] lg:pr-[1rem] lg:text-right lg:text-[1.5rem] lg:order-5">
							Ebenezer
						</h1>
						<button
							onClick={handleClick}
							className="your-button-styles"
						></button>
						<h4 className="your-frontend-title-styles">Frontend</h4>
					</div>
				</div>

				{/* Tiewei container */}
				<div
					className={`relative w-screen h-[50dvh] flex flex-col justify-start items-center lg:h-[100vh] lg:w-[50vw] will-change-transform transition-all duration-1000 ease-in-out z-50 ${
						slideOut
							? "translate-y-[200%] lg:-translate-y-0 lg:translate-x-full"
							: ""
					}`}
				>
					<BackgroundVideo
						src="/video/tech-s.mp4"
						className="absolute bottom-0 left-0 w-screen h-full object-cover object-[0_90%] lg:w-[50vw] lg:h-[100vh]"
					/>
					<div className="relative flex justify-between items-start w-full px-[1rem] lg:flex lg:flex-col lg:items-start lg:px-0">
						<h1 className="text-[#60B5FF]">Tiewei</h1>
						<button
							onClick={handleClick}
							className="your-button-styles"
						></button>
						<h4 className="your-developer-title-styles">Developer</h4>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Hero;
