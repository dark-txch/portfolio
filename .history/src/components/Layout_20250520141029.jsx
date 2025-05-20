import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({
	children,
	onHeroLinkClick,
	slideOut,
	fadeDuration = 200, // default to 600ms
}) => {
	return (
		<div
			className={`layout-container transition-opacity duration-${fadeDuration} ease-in-out ${
				slideOut ? "opacity-0" : "opacity-100"
			}`}
		>
			<header>
				<Nav onHeroLinkClick={onHeroLinkClick} />
			</header>

			<main>{children}</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
