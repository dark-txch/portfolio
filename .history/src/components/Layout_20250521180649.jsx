import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children, onHeroLinkClick, slideOut }) => {
	return (
		<AnimatePresence mode="wait">
			{!slideOut && (
				<motion.div
					key="layout"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6 }}
					className="layout-container"
				>
					<header>
						<Nav onHeroLinkClick={onHeroLinkClick} />
					</header>

					<main>{children}</main>

					<footer>
						<Footer />
					</footer>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Layout;
