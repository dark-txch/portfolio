
const BackgroundVideo = ({ src, className = "", style = {} }) => (
	<video
		autoPlay
		muted
		loop
		playsInline
		style={style}
		className={`absolute top-0 left-0 w-full h-full object-cover z-[-1] ${className}`}
	>
		<source src={src} type="video/mp4" />
	</video>
);
export default BackgroundVideo;
