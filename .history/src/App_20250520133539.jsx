import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

function App() {
	const [showHero, setShowHero] = useState(true);
	const [slideOut, setSlideOut] = useState(false);
	const [isEntering, setIsEntering] = useState(false);

	const handleHeroExit = () => {
		setSlideOut(true);
		setIsEntering(false);
		setTimeout(() => {
			setShowHero(false);
			setSlideOut(false);
		}, 1000);
	};

	const handleHeroEnter = () => {
		setShowHero(true);
		setIsEntering(true);
		setSlideOut(true);
		setTimeout(() => {
			setSlideOut(false);
		}, 300);
	};

	if (showHero) {
		return (
			<Hero
				onEnter={handleHeroExit}
				slideOut={slideOut}
				isEntering={isEntering}
			/>
		);
	}

	return (
		<Layout
			onHeroLinkClick={handleHeroEnter}
			slideOut={slideOut}
			fadeDuration={1000}
		>
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
