import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<main className="w-screen h-screen bg-[#0C0950]">
				<header className="">
					<nav className="origin-top bg-blue-500 text-white w-screen h-[7rem] shadow-lg flex items-center justify-center">
						<ul>
							<li>
								<link to="/hero">Ebenezer Tiewei</link>
							</li>
						</ul>
						<ul className="flex gap-8 text-lg">
							<link to="/home">Home</link>
							<link to="/about">About</link>
						</ul>
					</nav>
				</header>
			</main>
		</div>
	);
}
