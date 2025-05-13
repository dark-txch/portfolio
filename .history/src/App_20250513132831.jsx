import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import "backgroundVide"

function App() {
	return (
		<>
			{/* portfolio wrapper  */}
			<div className="portfolioWrapper w-screen h-full ">
				{/*  header door slide in */}
				<header className="heroHeader w-screen h-screen bg-gradient-to-b from-[#5409DA] to-[#4E71FF]">
					<div className="headerDoorSlideLeft ">
						<h1>Ebenezer</h1>
						<div className="leftLock"></div>
						<h4>Front End</h4>

						<span>
							<p>
								<MdKeyboardDoubleArrowDown />
								scroll
							</p>
						</span>
					</div>
					<div className="headerDoorSlideRight">
						<h1>Tiewei</h1>
						<div className="rightLock"></div>
						<h4>Developer</h4>
					</div>
				</header>

				{/* main body */}
				<main>
					<header></header>
				</main>
				<footer></footer>
			</div>
		</>
	);
}

export default App;
