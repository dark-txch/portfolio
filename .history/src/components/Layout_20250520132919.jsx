import Nav from "./Nav";

const Layout = ({ children, onHeroLinkClick, slideOut }) => {
	return (
		<div
			className={`fixed inset-0 w-full h-full transition-transform duration-500 ease-in-out ${
				slideOut
					? "translate-y-full"
					: "translate-y-0"
			}`}
		>
			<div className="relative w-full h-full overflow-y-auto">
				<header className="layout-header">
					<Nav onHeroLinkClick={onHeroLinkClick} />
				</header>

				<main className="layout-main">{children}</main>

				<footer className="layout-footer"></footer>
			</div>
		</div>
	);
};

export default Layout;
