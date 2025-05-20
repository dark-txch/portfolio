import Nav from "./Nav";

const Layout = ({ children }) => {
	return (
		<div className="layout-container">
			<header className="layout-header">
				<Nav />
			</header>
			<main className="layout-main">
				{children} {/* This dynamically renders the current page */}
			</main>
			<footer className="layout-footer"></footer>
		</div>
	);
};

export default Layout;
