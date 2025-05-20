import BackgroundVideo from "../components/BackgroundVideo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline, IoCloseOutline } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {


	// For the main container


	// Hamburger menu script for the nav bar
	const [isMenuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<>
			{/* portfolio project wrapper */}
		
				
				{/* HOME PARENT CONTAINER */}
				<main
					className={`absolute top-0 left-0 w-full h-full z-[20] transition-all duration-1000 ease-in-out ${
						mainSlideUp
							? "translate-y-0 opacity-100"
							: "translate-y-full opacity-0"
					}`}
				>
					{/* <header className="w-screen h-auto bg-[#0C0950]"> */}
					
					{/* Body of the header */}
					<header className="w-screen h-auto bg-[#0C0950] flex flex-col justify-center pb-[10rem]">
						<h1 className="font-unna font-bold text-cyan-200 px-[1rem] leading-[3rem] mt-[5rem] text-[2.5rem] mb-[1.5rem] lg:w-[65%] lg:mx-auto lg:text-[3rem]">
							Hello, I'm Ebenezer Tiewei &#x1F44B;
						</h1>
						<p className="font-thin text-[#EAE4D5] text-[1.8rem] leading-[2.5rem] px-[1rem] mb-[2rem] lg:w-[65%] lg:text-[2.2rem] lg:mx-auto">
							I’m a Frontend Developer with a strong passion for building
							elegant, user-centered web applications.
						</p>
						<p className="font-thin text-[#EAE4D5] text-[1.8rem] leading-[2.5rem] px-[1rem] lg:w-[65%] lg:text-[2.2rem] lg:mx-auto">
							My journey began on May 17th, 2024, and since then, I’ve developed
							a keen interest in responsive design, accessibility, and creating
							visually refined digital experiences.
						</p>
						<div className="flex justify-center mt-20 lg:w-[65%] lg:mx-auto">
							<button className="uppercase text-cyan-200 border border-cyan-500 px-6 py-3 rounded-[10rem] hover:bg-cyan-500 hover:text-[#0C0950] transition-all duration-500">
								More about me
							</button>
						</div>
					</header>
				</main>
		</>
	);
}
