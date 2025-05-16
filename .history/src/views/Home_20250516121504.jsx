import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<main className="w-screen h-screen bg-[#0C0950]">
				<header className="">
					<nav className="origin-top bg-blue-500 text-white w-screen h-[7rem] shadow-lg flex items-center justify-center">
						<ul>
							<li>
								<link to="/">Ebenezer
							</li>
						</ul>
						<ul className="flex gap-8 text-lg">
							<li>Home</li>
							<li>About</li>
							<li>Projects</li>
							<li>Contact</li>
						</ul>
					</nav>
				</header>
			</main>
		</div>
	);
}
