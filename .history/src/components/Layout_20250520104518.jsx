import Nav from "./Nav";

const Layout = ({ children, onHeroLinkClick }) => {
	return (
		<div className={`layout-container ${!showHero ? "fade-in" : ""}`}>
			<header className="layout-header">
				<Nav onHeroLinkClick={onHeroLinkClick} />
			</header>

			<main className="layout-main">{children}</main>

			<footer className="layout-footer">
				<p>&copy; {new Date().getFullYear()} Ebenezer</p>
			</footer>
		</div>
	);
};

export default Layout;
