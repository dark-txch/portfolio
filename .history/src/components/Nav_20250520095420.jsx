const Nav = () => {
	return (
		<header>
			<nav className="relative text-[1rem] w-screen shadow h-[6rem] flex justify-between items-center px-[1rem] uppercase lg:flex lg:items-center lg:justify-between lg:px-[3rem]">
				{/* Name links back to hero page */}
				<ul>
					<li className="text-cyan-200 hover:text-cyan-500 duration-500">
						<Link
							to="/home"
							onClick={() => {
								setMainSlideUp(false);
								setTimeout(() => {
									setSlideOut(false);
								}, 200);
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
						>
							Ebenezer Tiewei
						</Link>
					</li>
				</ul>

				{/* Hamburger and settings menu */}
				<div className="text-[#EAE4D5] hover:text flex gap-5 lg:gap-[2rem]">
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

					{/*Hamburger menu Top Section: Navigation Links */}
					<ul
						className={`${
							isMenuOpen
								? "opacity-100 translate-y-[5rem] transition-all duration-700 ease-out"
								: "opacity-0 pointer-events-none"
						} 
										absolute bg-[#0C0950] flex flex-col gap-5 items-center pt-[1rem] pb-[2.5rem] left-0 right-0 z-50
										lg:static lg:opacity-100 lg:pointer-events-auto lg:flex lg:gap-[2rem] lg:flex-row lg:translate-y-0 lg:py-0
									  `}
					>
						<li className="text-[#EAE4D5] hover:text-cyan-200 duration-500 ">
							<Link to="/home">Home</Link>
						</li>
						<li className="text-[#EAE4D5] hover:text-cyan-200 duration-500">
							<Link to="/about">About</Link>
						</li>
						<li className="text-[#EAE4D5] hover:text-cyan-200 duration-500">
							<Link to="/projects">Projectt</Link>
						</li>
						<li className="text-[#EAE4D5] hover:text-cyan-200 duration-500">
							<Link to="/contact">Contact</Link>
						</li>
						<li className="mt-[1rem] flex gap-10 lg:hidden">
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
					<button className="cursor-pointer flex items-center text-cyan-500 hover:text-cyan-200 motion-duration-500">
						<IoSettingsOutline size={24} />
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
