

const Hero = () => {

	return (
		<div
			className={` w-screen ${
				slideOut
					? "relative h-full overflow-auto"
					: "fixed h-screen overflow-hidden inset-0"
			}`}
		>
			
		</div>
	);
};

export default Hero;
