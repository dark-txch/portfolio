import Nav from "./Nav";
import Home from "../views"

const Layout = ({ children, onHeroLinkClick }) => {
	return (
		<div className="layout-container">
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
