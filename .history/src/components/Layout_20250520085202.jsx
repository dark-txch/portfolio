import React from 'react';
import 

const Layout = ({ children }) => {
	return (
		<div className="layout-container">
			<header className="layout-header">
				{/* Add your site header or navigation here */}
				<h1>My Portfolio</h1>
			</header>
			<main className="layout-main">
				{children}
			</main>
			<footer className="layout-footer">
				{/* Add your footer content here */}
				<p>&copy; {new Date().getFullYear()} Ebenezer</p>
			</footer>
		</div>
	);
};

export default Layout;