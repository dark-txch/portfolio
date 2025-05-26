// props that are passed to the video element and can be edited in the future
const BackgroundVideo = ({
	src,
	className = "",
	style = {},
	preload = "auto", // default preload behavior
	type = "video/mp4", // allows extension to other formats
}) => (
	<video
		autoPlay
		muted
		loop
		playsInline
		style={style}
		className={`${className}`}
		preload={preload}
	>
		<source src={src} type={type} />
	</video>
);

export default BackgroundVideo;
