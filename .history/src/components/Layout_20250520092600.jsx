import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="layout-container">
			<header className="layout-header"></header>
			<main className="">{children}</main>
			<footer className=""></footer>
		</div>
	);
};

export default Layout;
