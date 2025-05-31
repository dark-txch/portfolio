import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="w-screen bg-[#1c1860] text-cyan-200 py-[3rem] px-[1rem] flex flex-col lg:px-[3rem]">
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
				</p>
			</div>

			{/*Container for nav link icons and copyright  */}
			<div className="flex flex-col gap-2 mt-[2rem] lg:flex lg:flex-row lg:justify-between">
				<nav>
					<ul>
						<li className="flex gap-4 ">
							<a
								href="https://x.com/dark_txch?s=21&t=o3w1r65yzU2hxbP-LDD1ug"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<RiTwitterXLine className="text-[1rem] lg:text-[1.3rem] hover:border hover" />
							</a>
							<a
								href="https://www.linkedin.com/in/ebenezer-tiewei-093b21320/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<FaLinkedin className="text-[1rem] lg:text-[1.3rem]" />
							</a>
							<a
								href="https://github.com/dark-txch"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
							>
								<FaGithub className="text-[1rem] lg:text-[1.3rem]" />
							</a>
						</li>
					</ul>
				</nav>
				<div>&copy; designed &amp; built by Ebenezer Tiewei</div>
			</div>
		</footer>
	);
};

export default Footer;
