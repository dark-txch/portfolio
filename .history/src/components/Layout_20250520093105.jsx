import React from "react";
import Nav from "./Nav";
import
import Projects from "../views/Projects";

const Layout = ({ children }) => {
	return (
		<div className="layout-container">
			<header className="layout-header">
				<Nav />
			</header>
			<main className="">
				{children}
				<Home />
				<About />
				<Projects />
			</main>
			<footer className=""></footer>
		</div>
	);
};

export default Layout;
