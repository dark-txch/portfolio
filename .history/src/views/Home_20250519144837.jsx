import BackgroundVideo from "../components/BackgroundVideo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline, IoCloseOutline } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
	// For the hero page red button
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

	// Hamburger menu script for the nav bar
	const [isMenuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
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
						className={`relative w-screen h-[50dvh] flex flex-col justify-end items-center z-50 lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] will-change-transform transition-all duration-500 ease-in-out ${
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
								className="relative top-[1.5rem] text-[#60B5FF] text-[1.1rem] font-bold bg-[#CB0404] mx-[1rem] rounded-t-[5rem] border-[0.4rem] border-[#60B5FF] cursor-pointer w-[3.1rem] h-[3.2rem]  lg:w-[5rem] lg:h-[4.5rem] lg:top-auto lg:mx-0 lg:rounded-tl-[3rem] lg:rounded-bl-[3rem] lg:rounded-t-none lg:my-[1rem] lg:left-[2.7rem] lg:uppercase lg:order-1 motion-preset-pulse motion-duration-2000"
							>
								{/* <span className="lg:hidden absolute top-[1.4rem] left-[0.8rem]">
									click
								</span> */}
							</button>

							<h4 className="text-[1.3rem] text-[#60B5FF] font-bold text-right pr-[0.6rem] uppercase w-[7rem] pb-[0.5rem] lg:w-[15rem] lg:pl-[1rem] lg:text-[2.5rem] lg:order-4">
								Frontend
							</h4>
						</div>
					</div>

					{/* TIEWEI container */}
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
							<h1 className="text-[#60B5FF] text-[1.3rem] font-bold uppercase w-[7rem] pt-[0.5rem] lg:pt-0 lg:pb-[0.5rem] lg:w-[15rem] lg:pl-[1rem] lg:text-[1.5rem] lg:order-5">
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

							<h4 className="text-[1.3rem] text-[#60B5FF] font-bold text-right pr-[0.3rem] uppercase w-[7rem] pt-[0.5rem] lg:text-left lg:pb-[0.5rem] lg:pt-0 lg:w-[15rem] lg:pl-[1rem] lg:text-[2.5rem] lg:order-4">
								Developer
							</h4>
						</div>
					</div>
				</header>

				{/* HOME PARENT CONTAINER */}
				<main className="-translate-y-[70%] lg:-translate-y-[170%] ">
					<header className="w-screen h-auto bg-[#0C0950]">
						<nav className="relative text-[1rem] w-screen shadow flex justify-between px-[1rem] py-[1.5rem] uppercase lg:flex lg:items-center lg:justify-between lg:pt-[2rem] lg:px-[3rem]">
							{/* Name links back to hero page */}
							<ul>
								<li className="text-cyan-200 hover:text-cyan-500 duration-500">
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

							{/* Hamburger and settings menu */}
							<div className="text-cyan-500 hover:text flex gap-5 lg:gap-[2rem]">
								<button
									className="relative lg:hidden"
									onClick={toggleMenu}
									aria-label="menu"
								>
									{isMenuOpen ? (
										<IoCloseOutline size={24} />
									) : (
										<RxHamburgerMenu size={24} />
									)}
								</button>

								{/*Hamburger menu Top Section: Navigation Links */}
								<ul
									className={`${
										isMenuOpen
											? "opacity-100 translate-y-14"
											: "opacity-0 pointer-events-none"
									} transition-all duration-700 ease-out
										absolute bg-[#0C0950] flex flex-col gap-4 items-center pt-[1rem] pb-[2rem] left-0 right-0 z-50
										lg:static lg:opacity-100 lg:pointer-events-auto lg:flex lg:gap-[2rem] lg:flex-row lg:translate-y-0 lg:py-0
									  `}
								>
									<li className="hover:text-cyan-200 duration-500 ">
										<Link to="/home">Home</Link>
									</li>
									<li className="hover:text-cyan-200 duration-500">
										<Link to="/about">About</Link>
									</li>
									<li className="hover:text-cyan-200 duration-500">
										<Link to="/projects">Projectt</Link>
									</li>
									<li className="hover:text-cyan-200 duration-500">
										<Link to="/contact">Contact</Link>
									</li>
									<li className="mt-[1rem] flex gap-5 lg:hidden">
										<a
											href="https://x.com/dark_txch?s=21&t=o3w1r65yzU2hxbP-LDD1ug"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Twitter"
										>
											<RiTwitterXLine />
										</a>
										<a
											href="https://www.linkedin.com/in/ebenezer-tiewei-093b21320/"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="LinkedIn"
										>
											<FaLinkedin />
										</a>
										<a
											href="https://github.com/dark-txch"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="LinkedIn"
										>
											<FaGithub />
										</a>
									</li>
								</ul>
								<button className="cursor-pointer flex items-center hover:text-cyan-200 motion-duration-500">
									<IoSettingsOutline size={24} />
								</button>
							</div>
						</nav>
						{/* Body of the header */}
						<h1 className="font-unna text-cyan-200 px-[1rem] leading-[3rem] mt-[4rem] text-[2.5rem] mb-[0.8rem] lg:w-[65%] lg:mx-auto lg:text-[3rem]">
							Hello, I'm Ebenezer Tiewei &#x1F44B;
						</h1>
						<p className="font-unna text-[#EAE4D5] text-[1.8rem] leading-[3rem] px-[1rem] lg:w-[65%] lg:text-[2.2rem] lg:mx-auto">
							I’m a Frontend Developer with a strong passion for building
							elegant, user-centered web applications.
						</p>
						<p className="font-unna text-[#EAE4D5] text-[1.8rem] leading-[3rem] px-[1rem] lg:w-[65%] lg:text-[2.2rem] lg:mx-auto">
							My journey began on May 17th, 2024, and since then, I’ve developed
							a keen interest in responsive design, accessibility, and creating
							visually refined digital experiences.
						</p>
						<button></button>
					</header>
				</main>
			</div>
		</>
	);
}
