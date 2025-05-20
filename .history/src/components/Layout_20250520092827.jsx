import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
	return (
		<div className="layout-container">
			<header className="layout-header">
				,Nav
			</header>
			<main className="">{children}</main>
			<footer className=""></footer>
		</div>
	);
};

export default Layout;
