import Nav from "./Nav";

const Layout = ({
	children,
	onHeroLinkClick,
	slideOut,
	fadeDuration = 600, // default to 600ms
}) => {
	return (
		<div
			className={`layout-container transition-opacity ease-in-out ${
				slideOut
					? "opacity-0 translate-y-[5rem] transition-all duration-700 ease-out"
					: "opacity-100"
			}`}
			style={{ transitionDuration: `${fadeDuration}ms` }}
		>
			<header className="layout-header">
				<Nav onHeroLinkClick={onHeroLinkClick} />
			</header>

			<main className="layout-main">{children}</main>

			<footer className="layout-footer"></footer>
		</div>
	);
};

export default Layout;
