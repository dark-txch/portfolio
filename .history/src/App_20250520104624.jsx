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
		setSlideOut(false);
		setShowHero(true);
	};

	if (showHero) {
		return <Hero onEnter={handleHeroExit} slideOut={slideOut} />;
	}

	return (
		<Layout onHeroLinkClick={handleHeroEnter}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Layout>
	);
}
