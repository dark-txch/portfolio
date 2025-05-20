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
		setSlideOut(true);
		setTimeout(() => {
			setShowHero(false);
			setSlideOut(false); // reset after hero is hidden
		}, 1000);
	};

	const handleHeroEnter = () => {
		setShowHero(true); // Show Hero first (it'll mount hidden)
		setTimeout(() => {
			setSlideOut(false); // Then trigger slide *in*
		}, 50); // Tiny delay so transitions kick in (50–100ms works)
	};

	if (showHero) {
		return <Hero onEnter={handleHeroExit} slideOut={slideOut} />;
	}

	return (
		<Layout onHeroLinkClick={handleHeroEnter} slideOut={slideOut}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Layout>
	);
}

export default App;
