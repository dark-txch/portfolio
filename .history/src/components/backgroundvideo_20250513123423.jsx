// BackgroundVideo.jsx
const BackgroundVideo = () => {
	return (
		<div className="relative w-full h-screen overflow-hidden">
			{/* Video element */}
			<video
				autoPlay
				muted
				loop
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
			>
				<source src="/videos/background.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Overlay content */}
			<div className="relative z-10 flex items-center justify-center h-full text-white">
				<h1 className="text-4xl md:text-6xl font-bold">Welcome</h1>
			</div>
		</div>
	);
};

export default BackgroundVideo;
