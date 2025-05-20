import { useState } from "react";
import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-cyan-500 py-[3rem]">
			<div>
				<h6>Would you like to support my content?</h6>
				<p>Hire me or recommend me.. thanks</p>
			</div>

			{/*Container for nav link icons and copyright  */}
			<div>
				<nav>
					<ul>
						<li className="mt-[1rem] flex gap-3 ">
							<a
								href="https://x.com/dark_txch?s=21&t=o3w1r65yzU2hxbP-LDD1ug"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<RiTwitterXLine size={20} />
							</a>
							<a
								href="https://www.linkedin.com/in/ebenezer-tiewei-093b21320/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<FaLinkedin size={20} />
							</a>
							<a
								href="https://github.com/dark-txch"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
							>
								<FaGithub size={20} />
							</a>
						</li>
					</ul>
				</nav>
				<div>
					&copy; designed and built by 
				</div>
			</div>
		</footer>
	);
};

export default Footer;
