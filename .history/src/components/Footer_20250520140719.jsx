import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-cyan-500">
			<div>
				<h6>Would you like to support my content?</h6>
				<p>Hire me or recommend me.. thanks</p>
			</div>

			{/*Container for nav link icons and copyright  */}
			<div>
				<div></div>
				<div></div>
			</div>
		</footer>
	);
};

export default Footer;
