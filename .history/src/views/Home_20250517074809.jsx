import BackgroundVideo from "../components/BackgroundVideo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
	const [slideOut, setSlideOut] = useState(false);

	useEffect(() => {
		if (!slideOut) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [slideOut]);

	const handleClick = () => {
		setSlideOut(!slideOut);
	};

	return (
		<>
			{/* portfolio project wrapper */}
			<div
				className={` w-screen ${
					slideOut
						? "relative h-full overflow-auto"
						: "fixed h-screen overflow-hidden inset-0"
				}`}
			>
				{/* hero header */}
				<header className="w-screen h-[100vh] bg-gradient-to-b from-[#5409DA] to-[#4E71FF] overflow-hidden lg:flex lg:justify-center lg:items-center">
					{/* EBENEZER container */}
					<div
						className={`relative w-screen h-[50dvh] flex flex-col justify-end items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] will-change-transform transition-all duration-500 ease-in-out z-20 ${
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
							<h1 className="text-[#60B5FF] text-[1.2rem] uppercase font-bold w-[7rem] pb-[0.5rem] lg:w-[15rem] lg:pr-[1rem] lg:text-right lg:text-[1rem] lg:order-5">
								Ebenezer
							</h1>

							{/* Button */}
							<button
								onClick={handleClick}
								className="relative top-[1.5rem] text-[#60B5FF] text-[1.1rem] font-bold bg-[#CB0404] mx-[1rem] rounded-t-[5rem] border-[0.4rem] border-[#60B5FF] cursor-pointer w-[3.1rem] h-[3.2rem]  lg:w-[5rem] lg:h-[4.5rem] lg:top-auto lg:mx-0 lg:rounded-tl-[3rem] lg:rounded-bl-[3rem] lg:rounded-t-none lg:my-[1rem] lg:left-[2.7rem] lg:uppercase lg:order-1 motion-preset-pulse motion-duration-2000"
							>
								{/* <span className="lg:hidden absolute top-[1.4rem] left-[0.8rem]">
									click
								</span> */}
							</button>

							<h4 className="text-[1.2rem] text-[#60B5FF] font-bold text-right pr-[0.6rem] uppercase w-[7rem] pb-[0.5rem] lg:w-[15rem] lg:pl-[1rem] lg:text-[2rem] lg:order-4">
								Frontend
							</h4>
						</div>
					</div>

					{/* TIEWIE container */}
					<div
						className={`relative w-screen h-[50dvh] flex flex-col justify-start items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] will-change-transform transition-all duration-500 ease-in-out z-20 ${
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
							<h1 className="text-[#60B5FF] text-[1.2rem] font-bold uppercase w-[7rem] pt-[0.5rem] lg:pt-0 lg:pb-[0.5rem] lg:w-[15rem] lg:pl-[1rem] lg:text-[1rem] lg:order-5">
								Tiewei
							</h1>

							{/* Button */}
							<button
								onClick={handleClick}
								className="relative bottom-[1.6rem] text-[#60B5FF] text-[1.1rem] font-bold bg-[#CB0404] rounded-b-[5rem] border-[0.4rem] border-[#60B5FF] cursor-pointer overflow-hidden w-[3.1rem] h-[3.2rem] lg:w-[5rem] lg:h-[4.5rem] lg:bottom-auto lg:mx-0 lg:rounded-b-none lg:rounded-tr-[3rem] lg:rounded-br-[3rem] lg:my-[1rem] lg:right-[2.7rem] lg:uppercase lg:order-1 motion-preset-pulse motion-duration-2000"
							>
								{/* <span className="lg:hidden absolute top-[0.75rem] left-[0.8rem]">
									click
								</span> */}
							</button>

							<h4 className="text-[1.2rem] text-[#60B5FF] font-bold text-right pr-[0.3rem] uppercase w-[7rem] pt-[0.5rem] lg:text-left lg:pb-[0.5rem] lg:pt-0 lg:w-[15rem] lg:pl-[1rem] lg:text-[2rem] lg:order-4">
								Developer
							</h4>
						</div>
					</div>
				</header>

				{/* HOME PARENT CONTAINER */}
				<main className="-translate-y-full ">
					<header className="w-screen h-screen bg-[#0C0950]">
						<nav className=" text-white  w-screen h-[7rem] shadow-lg flex items-center justify-center border-[0.3rem] border-solid border-red-500 ">
							<ul>
								<li>
									<Link
										to="/home"
										onClick={() => {
											setSlideOut(false);
											window.scrollTo({ top: 0, behavior: "smooth" });
										}}
									>
										Ebenezer Tiewei
									</Link>
								</li>
							</ul>
							<ul className="flex gap-8 text-lg">
								<Link to="/home">Home</Link>
								<Link to="/about">About</Link>
								<Link to="/projects">Projectt</Link>
								<Link to="/contact">Contact</Link>
							</ul>
						</nav>
					</header>
				</main>
			</div>
		</>
	);
}
