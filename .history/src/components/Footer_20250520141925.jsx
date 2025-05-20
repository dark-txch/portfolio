import { useState } from "react";
import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-cyan-500">
			<div>
				<h6>Would you like to support my content?</h6>
				<p>Hire me or recommend me.. thanks</p>
			</div>

			{/*Container for nav link icons and copyright  */}
			<div>
				<div>
					<ul>
						<li className="mt-[1rem] flex gap-5 ">
							<a
								href="https://x.com/dark_txch?s=21&t=o3w1r65yzU2hxbP-LDD1ug"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<RiTwitterXLine  size={20}/>
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
								aria-label="GitHub"
							>
								<FaGithub />
							</a>
						</li>
					</ul>
				</div>
				<div></div>
			</div>
		</footer>
	);
};

export default Footer;
