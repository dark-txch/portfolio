import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<main className="w-screen h-auto bg-[#09063a] text-[1.4rem] flex flex-col justify-center pb-[10rem] lg:text-[1.5rem]">
				<h1 className="font-unna font-bold text-cyan-200 px-[1rem] leading-[3rem] mt-[5rem] text-[2.5rem] mb-[1.5rem] lg:w-[65%] lg:mx-auto lg:text-[3rem]">
					Hello, I'm Ebenezer Tiewei &#x1F44B;
				</h1>
				<p className="font-thin text-[#EAE4D5] leading-[2.5rem] px-[1rem] mb-[2rem] lg:w-[65%] lg:mx-auto">
					I’m a Frontend Developer with a strong passion for building elegant,
					user-centered web applications.
				</p>
				<p className="font-thin text-[#EAE4D5] leading-[2.5rem] px-[1rem] lg:w-[65%] lg:mx-auto">
					My journey began on May 17th, 2024, and since then, I’ve developed a
					keen interest in responsive design, accessibility, and creating
					visually refined digital experiences.
				</p>
				<div className="flex justify-center w-screen mx-auto mt-20 lg:w-[65%] lg:mx-auto">
					<Link
						to="/about"
						className="inline-block uppercase text-[1rem] text-cyan-200 border border-cyan-500 px-6 py-3 rounded-[10rem] hover:bg-cyan-500 hover:text-[#0C0950] transition-all duration-500"
					>
						More about me
					</Link>
				</div>
			</main>
		</>
	);
}
