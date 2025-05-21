import Ebenezer from "../assets/Ebenezer.png";

export default function About() {
	return (
		<div className="w-screen h-auto bg-[#09063a] flex flex-row justify-center pb-[10rem]">
			<div className="border-[0.2rem] border-cyan-100">
				<h1 className="font-unna font-bold text-cyan-200 px-[1rem] leading-[3rem] mt-[5rem] text-[2.5rem] mb-[1.5rem]  lg:mx-auto lg:text-[3rem]">
					Hello, I'm Ebenezer Tiewei &#x1F44B;
				</h1>
				<p className="font-thin text-[#EAE4D5] text-[1.8rem] leading-[2.5rem] px-[1rem] mb-[2rem] lg:w-[65%] lg:text-[2.2rem] lg:mx-auto">
					I made a decision to transition from a gym instructior and personal
					trainer to a software developer on the 17th of May 2024 and it as been
					one of the best decisions i have made.
				</p>
				<p className="font-thin text-[#EAE4D5] text-[1.8rem] leading-[2.5rem] px-[1rem] mb-[2rem] lg:w-[65%] lg:text-[2.2rem] lg:mx-auto">
					My journey started at AltSchool Africa, where I immersed myself in the
					world of web development. I quickly discovered my passion for building
					visually pleasing and user-friendly web applications. I have developed
					a strong interest in responsive design, accessibility, and creating
					refined web applications.
				</p>
				<p className="font-thin text-[#EAE4D5] text-[1.8rem] leading-[2.5rem] px-[1rem] mb-[2rem] lg:w-[65%] lg:text-[2.2rem] lg:mx-auto">
					My goal is to develop a deep understanding of the principles of
					software development and to become a proficient software engineer.
				</p>
				<p className="font-thin text-[#EAE4D5] text-[1.8rem] leading-[2.5rem] px-[1rem] mb-[2rem] lg:w-[65%] lg:text-[2.2rem] lg:mx-auto">
					I am actively seeking opportunities to work on exciting projects and
					collaborate with talented individuals in the tech industry.
				</p>
				<p className="font-thin text-[#EAE4D5] text-[1.8rem] leading-[2.5rem] px-[1rem] mb-[2rem] lg:w-[65%] lg:text-[2.2rem] lg:mx-auto">
					I am particularly interested in roles that allow me to contribute to
					the development of innovative web applications and to learn from
					experienced professionals.
				</p>
				<div className="flex justify-center mt-20 lg:w-[65%] lg:mx-auto">
					<a
						href=""
						className="inline-block uppercase text-cyan-200 border border-cyan-500 px-6 py-3 rounded-[10rem] hover:bg-cyan-500 hover:text-[#0C0950] transition-all duration-500"
					>
						Download my resume
					</a>
				</div>
			</div>
			<div>
				<img src={Ebenezer} alt="Ebenezer" />
			</div>
		</div>
	);
}
