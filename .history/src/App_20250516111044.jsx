import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from .

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
