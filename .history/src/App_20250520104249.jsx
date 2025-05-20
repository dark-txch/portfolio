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
			setShowHero(false); // Hide hero after animation
		}, 1000); // Match this duration with your CSS transition
	};

	const handleHeroEnter = () => {
		setShowHero(true); // Show hero again
		setSlideOut(false); // Reset animation state
	};

	return (
		<>
			{showHero ? (
				<Hero onExit={handleHeroExit} slideOut={slideOut} />
			) : (
				<Layout onHeroLinkClick={handleHeroEnter}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Layout>
			)}
		</>
	);
}

export default App;
