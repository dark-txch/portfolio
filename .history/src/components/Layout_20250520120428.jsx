import Nav from "./Nav";

const Layout = ({ children, onHeroLinkClick, slideOut }) => {
	return (
		<div
			className={`layout-container transition-opacity duration-1000 ease-in-out ${
				slideOut ? "opacity-0" : "opacity-100"
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
