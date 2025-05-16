import { Routes, Route } from "react-router-dom";
import Hero from "./views/Hero";
import Home from "./views/Home";
import Contact from "./views/Contact";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Hero />} />
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
}

export default App;
