import Nav from "./Nav";

const Layout = ({
	children,
	onHeroLinkClick,
	slideOut,
	fadeDuration = 600, // 600ms fade duration
}) => {
	return (
		<div
			className={`layout-container transition-opacity ease-in-out ${
				slideOut ? "opacity-0" : "opacity-100"
			}`}
			style={{ transitionDuration: `${fadeDuration}ms` }}
		>
			{/* ... */}
		</div>
	);
};

export default Layout;
