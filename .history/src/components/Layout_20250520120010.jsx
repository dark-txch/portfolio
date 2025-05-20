import Nav from "./Nav";

const Layout = ({ children, onHeroLinkClick, slideOut }) => {
	return (
		<div
			className={`layout-container transition-all duration-300 ease-in-out ${
				slideOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
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
