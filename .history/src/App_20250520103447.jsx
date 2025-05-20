import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";

function App() {
	const onHeroLinkClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<Router>
			<Routes>
				<Route
					path="/home"
					element={
						<Layout onHeroLinkClick={onHeroLinkClick}>
							<Home />
						</Layout>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
