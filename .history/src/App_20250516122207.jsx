import { Routes, Route } from "react-router-dom";
import Hero from "./views/Hero";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Hero />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
}

export default App;
