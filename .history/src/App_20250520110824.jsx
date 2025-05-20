import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

function App() {
	const [showHero, setShowHero] = useState(true);
	const [slideOut, setSlideOut] = useState(false);

	const handleHeroExit = () => {
		setSlideOut(true); // trigger slide out

		// wait for animation to finish before unmounting Hero
		setTimeout(() => {
			setShowHero(false);
		}, 1000); // match the Hero slideOut animation (1000ms)
	};

	const handleHeroEnter = () => {
		setSlideOut(true); // trigger slide-out animation for layout
		setTimeout(() => {
			setShowHero(true); // show hero
			setSlideOut(false); // reset slideOut for hero slide-in
		}, 200);
	};

	if (showHero) {
		return <Hero onEnter={handleHeroExit} slideOut={slideOut} />;
	}

	return (
		<Layout onHeroLinkClick={handleHeroEnter}>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Layout>
	);
}

export default App;
