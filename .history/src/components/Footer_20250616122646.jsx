import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
	let date = new Date().getFullYear();

	return (
		<footer className="w-screen bg-[#1c1860] text-cyan-200 py-[3rem] px-[1rem] flex flex-col lg:px-[2rem]">
			<div className="flex flex-col items-end">
				<h6>Would you like to support my content?</h6>
				<p className="flex flex-col items-end text-[1.1rem]">
					Hire me or recommend me
					
					<a
						href="
				https://wa.me/message/UHRWC3UBMMB2E1"
					>
						<FaWhatsappSquare
							size={40}
							className="bg-[#004300] hover:text-cyan-400"
						/>
					</a>
			</div>

			{/*Container for nav link icons and copyright  */}
			<div className="flex flex-col gap-2 mt-[2rem] lg:flex lg:flex-row lg:justify-between">
				<nav>
					<ul>
						<li className="flex gap-2 ">
							<a
								href="https://x.com/dark_txch?s=21&t=o3w1r65yzU2hxbP-LDD1ug"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<span className="inline-flex items-center justify-center p-2 border border-transparent hover:border-cyan-200 rounded transition-all duration-300">
									<RiTwitterXLine className="text-[1rem] lg:text-[1.3rem]" />
								</span>
							</a>
							<a
								href="https://www.linkedin.com/in/ebenezer-tiewei-093b21320/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<span className="inline-flex items-center justify-center p-2 border border-transparent hover:border-cyan-200 rounded transition-all duration-300">
									<FaLinkedin className="text-[1rem] lg:text-[1.3rem]" />
								</span>
							</a>
							<a
								href="https://github.com/dark-txch"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
							>
								<span className="inline-flex items-center justify-center p-2 border border-transparent hover:border-cyan-200 rounded transition-all duration-300">
									<FaGithub className="text-[1rem] lg:text-[1.3rem]" />
								</span>
							</a>
						</li>
					</ul>
				</nav>
				<div>&copy; {date}. designed &amp; built by Ebenezer Tiewei</div>
			</div>
		</footer>
	);
};

export default Footer;
