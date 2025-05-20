import Nav from "./Nav";

const Layout = ({ children, onHeroLinkClick }) => {
	return (
		<div className="layout-container">
			<header className="layout-header">
				<h1>My Portfolio</h1>
				{/* Example Nav */}
				<nav>
					<ul>
						<li className="text-cyan-200 hover:text-cyan-500 duration-500">
							<a onClick={onHeroLinkClick} className="cursor-pointer">
								Ebenezer Tiewei
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<main className="layout-main">{children}</main>

			<footer className="layout-footer">
				<p>&copy; {new Date().getFullYear()} Ebenezer</p>
			</footer>
		</div>
	);
};
