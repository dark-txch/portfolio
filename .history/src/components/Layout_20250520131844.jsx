import Nav from "./Nav";

const Layout = ({
	children,
	onHeroLinkClick,
	slideOut,
	fadeDuration = 200, // default to 600ms
}) => {
	return (
		<div
			className={`layout-container transition-opacity duration-${fadeDuration} ease-in-out ${
				slideOut ? "opacity-100" : "opacity-100"
			}`}
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
