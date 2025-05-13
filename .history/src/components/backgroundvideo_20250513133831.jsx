// props that are passed to the video element and can be edited in the future
const BackgroundVideo = ({ src, className = "", style = {} }) => (
	<video
		autoPlay
		muted
		loop
		playsInline
		style={style}
		className={`${className}`}
	>
		<source src={src} type=""/>
	</video>
);
export default BackgroundVideo;
