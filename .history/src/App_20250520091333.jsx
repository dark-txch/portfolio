import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Layout from "./components/Layout";
import Hero from "./cHero";

function App() {
	const [showHero, setShowHero] = useState(true);

	const handleHeroExit = () => {
		setShowHero(false);
	};

	if (showHero) {
		return <Hero onEnter={handleHeroExit} />;
	}

	return (
		<Layout>
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
