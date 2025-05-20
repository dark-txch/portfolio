const Hero = ({ onExit, slideOut }) => {
	const handleClick = () => {
	  onExit(); // Trigger exit animation and hide hero
	};
  
	return (
	  <div
		className={`w-screen ${
		  slideOut
			? "relative h-full overflow-auto"
			: "fixed h-screen overflow-hidden inset-0"
		}`}
	  >
		<div className="w-screen min-h-screen max-h-screen overflow-hidden bg-gradient-to-b from-[#5409DA] to-[#4E71FF] flex flex-col lg:flex-row">
		  {/* EBENEZER container */}
		  <div
			className={`relative w-screen h-[50dvh] flex flex-col justify-end items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] will-change-transform transition-all duration-1000 ease-in-out z-50 ${
			  slideOut
				? "-translate-y-[200%] lg:-translate-y-0 lg:-translate-x-full"
				: ""
			}`}
		  >
			{/* ... (your existing Hero content) ... */}
		  </div>
  
		  {/* TIEWEI container */}
		  <div
			className={`relative w-screen h-[50dvh] flex flex-col justify-start items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] will-change-transform transition-all duration-1000 ease-in-out z-50 ${
			  slideOut
				? "translate-y-[200%] lg:-translate-y-0 lg:translate-x-full"
				: ""
			}`}
		  >
			{/* ... (your existing Hero content) ... */}
		  </div>
		</div>
	  </div>
	);
  };
  
  export default Hero;