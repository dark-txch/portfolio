import Nav from "./Nav";

const Layout = ({ children, onHeroLinkClick, slideOut }) => {
	return (
		<div
			className={`layout-container transition-transform duration-1000 ease-in-out ${
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
