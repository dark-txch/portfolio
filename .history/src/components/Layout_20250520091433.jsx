import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="layout-container">
			<header className="layout-header">
				{/* Add your site header or navigation here */}
				<h1>My Portfolio</h1>
			</header>
			<main className="">{children}</main>
			<footer className=""></footer>
		</div>
	);
};

export default Layout;
