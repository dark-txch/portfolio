import { useState } from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline, IoCloseOutline } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = ({ onHeroLinkClick }) => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [ebenezerTieweiAnimate, setEbenezerTieweiAnimate] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};
	const linkClickClose = () => setMenuOpen(false);

	return (
		<header>
			<nav className="relative text-[2rem] w-screen shadow h-[6rem] flex justify-between items-center px-[1rem] uppercase lg:flex lg:items-center lg:justify-between lg:px-[2rem]">
				{/* Name links back to hero page */}
				<ul>
					<li className="text-cyan-500 hover:text-cyan-400 hover:font-bold duration-500">
						<a
							onClick={() => {
								setEbenezerTieweiAnimate(true);
								setTimeout(() => {
									onHeroLinkClick();
									setEbenezerTieweiAnimate(false);
								}, 600);
							}}
							className={`cursor-pointer transition-all duration-500 transform ease-in-out ${
								ebenezerTieweiAnimate
									? "opacity-0 scale-90"
									: "opacity-100 scale-100"
							}`}
						>
							Ebenezer Tiewei
						</a>
					</li>
				</ul>

				{/* Hamburger and settings menu */}
				<div className="text-cyan-500 hover:text-cyan-400 flex gap-5 lg:gap-[2rem]">
					<button
						className="relative lg:hidden"
						onClick={toggleMenu}
						aria-label="menu"
					>
						{isMenuOpen ? (
							<IoCloseOutline size={40} />
						) : (
							<RxHamburgerMenu size={40} />
						)}
					</button>

					<ul
						className={`${
							isMenuOpen
								? "opacity-100 translate-y-[2rem] transition-all duration-700 ease-out"
								: "opacity-0 pointer-events-none transition-all duration-400 ease-out"
						} 
						absolute bg-[#09063a] flex flex-col gap-5 items-center py-[2rem] left-0 right-0 z-50
						lg:static lg:opacity-100 lg:pointer-events-auto lg:flex lg:gap-[2rem] lg:flex-row lg:translate-y-0 lg:py-0`}
					>
						<li className="text-cyan-500 hover:text-cyan-400 hover:font-bold duration-500">
							<Link
								to="/home"
								onClick={linkClickClose}
								className="w-screen flex justify-center lg:w-auto lg:block"
							>
								Home
							</Link>
						</li>
						<li className="text-cyan-500 hover:text-cyan-400 hover:font-bold duration-500">
							<Link
								to="/about"
								onClick={linkClickClose}
								className="w-screen flex justify-center lg:w-auto lg:block"
							>
								About
							</Link>
						</li>
						<li className="text-cyan-500 hover:text-cyan-400 hover:font-bold duration-500">
							<Link
								to="/projects"
								onClick={linkClickClose}
								className="w-screen flex justify-center lg:w-auto lg:block"
							>
								Projects
							</Link>
						</li>
						<li className="text-cyan-500 hover:text-cyan-400 hover:font-bold duration-500">
							<Link
								to="/contact"
								onClick={linkClickClose}
								className="w-screen flex justify-center lg:w-auto lg:block"
							>
								Contact
							</Link>
						</li>
						<li className="flex gap-3 lg:hidden">
							<a
								href="https://x.com/dark_txch?s=21&t=o3w1r65yzU2hxbP-LDD1ug"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<span className="inline-flex items-center justify-center p-2 border border-transparent hover:border-cyan-200 rounded transition-all duration-300">
									<RiTwitterXLine />
								</span>
							</a>
							<a
								href="https://www.linkedin.com/in/ebenezer-tiewei-093b21320/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<span className="inline-flex items-center justify-center p-2 border border-transparent hover:border-cyan-200 rounded transition-all duration-300">
									<FaLinkedin />
								</span>
							</a>
							<a
								href="https://github.com/dark-txch"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
							>
								<span className="inline-flex items-center justify-center p-2 border border-transparent hover:border-cyan-200 rounded transition-all duration-300">
									<FaGithub />
								</span>
							</a>
						</li>
					</ul>

					<button className="cursor-pointer flex items-center text-cyan-500 hover:text-cyan-200 motion-duration-500">
						<IoSettingsOutline size={24} />
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
