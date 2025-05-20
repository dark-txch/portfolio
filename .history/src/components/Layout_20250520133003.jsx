import Nav from "./Nav";

const Layout = ({
	children,
	onHeroLinkClick,
	slideOut,
	fadeDuration = 200, // default to 600ms
}) => {
	return (
		<div
			className={`fixed inset-0 w-full h-full transition-all duration-500 ease-in-out ${
				slideOut ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
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
