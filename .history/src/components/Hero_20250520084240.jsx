// Hero component
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

useEffect(() => {
	if (!slideOut) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}
}, [slideOut]);

const handleClick = () => {
	if (!slideOut) {
		setSlideOut(true);
		setTimeout(() => {
			setMainSlideUp(true);
		}, 200);
	}
};

const Hero = () => {
	return (
		<div
			className={` w-screen ${
				slideOut
					? "relative h-full overflow-auto"
					: "fixed h-screen overflow-hidden inset-0"
			}`}

			
		></div>
	);
};

export default Hero;
