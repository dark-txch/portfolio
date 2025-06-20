import BackgroundVideo from "../components/BackgroundVideo";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Hero = ({ slideOut, onEnter }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		onEnter();
		navigate("/");
	};

	return (
		<div
			className={`w-screen ${
				slideOut
					? "relative h-full overflow-auto"
					: "fixed h-screen overflow-hidden inset-0"
			}`}
		>
			<div className="w-screen min-h-screen max-h-screen overflow-hidden bg-gradient-to-b from-[#5409DA] to-[#4E71FF] flex flex-col lg:flex-row">
				{/* EBENEZER container */}
				<div
					className={`relative w-screen h-[50dvh] flex flex-col justify-end items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] will-change-transform transition-all duration-1000 ease-in-out z-50  ${
						slideOut
							? "-translate-y-[200%] lg:-translate-y-0 lg:-translate-x-full"
							: ""
					}`}
				>
					<BackgroundVideo
						src="/video/gym-s.mp4"
						type="video/mp4"
						preload="auto"
						className="absolute top-0 left-0 w-screen h-[100%] object-cover object-[0_20%]"
					/>
					<div className="relative flex justify-between items-end w-full overflow-hidden px-[1rem] lg:flex lg:flex-col lg:items-end lg:px-0">
						<h1 className="w-[6rem] text-[#60B5FF] text-[1rem] uppercase font-bold pb-[0.5rem] md:w-[10rem] md:text-[1.5rem] lg:w-fit lg:pr-[1rem] lg:text-right lg:text-[1.5rem] lg:order-5">
							Ebenezer
						</h1>

						{/* Button */}
						<button
							onClick={handleClick}
							className="relative top-[1.5rem] text-[#60B5FF] text-[1.1rem] font-bold bg-[#CB0404] mx-[1rem] rounded-t-[5rem] border-[2px] border-[#60B5FF] cursor-pointer w-[3.1rem] h-[3.2rem] md:w-[4.5rem] md:h-[4rem] lg:w-[5rem] lg:h-[4.5rem] lg:top-auto lg:mx-0 lg:rounded-tl-[3rem] lg:rounded-bl-[3rem] lg:rounded-t-none lg:my-[1rem] lg:left-[2.7rem] lg:uppercase lg:order-1 motion-preset-pulse motion-duration-2000"
						>
							{/* <span className="relative bottom-[0.5rem] text-[1rem] lg:left-[-1.2rem] lg:bottom-0">Tap</span> */}
							<FaHome
								size={30}
								className="relative  left-[0.5rem] top-[-0.2rem] md:left-[0.55rem] md:top-[0.1rem] md:size-[3rem] lg:left-[0.7rem] lg:top-0"
							/>
						</button>

						<h4 className="w-[6rem] text-[1rem] text-[#60B5FF] font-bold border-[2px] text-right uppercase pb-[0.5rem] md:w-[10rem] md:text-[1.5rem] lg:w-fit lg:pr-[1rem] lg:text-[2.5rem] lg:order-4">
							Frontend
						</h4>
					</div>
				</div>

				{/* TIEWEI container */}
				<div
					className={`relative w-screen h-[50dvh] flex flex-col justify-start items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] will-change-transform transition-all duration-1000 ease-in-out z-50 ${
						slideOut
							? "translate-y-[200%] lg:-translate-y-0 lg:translate-x-full"
							: ""
					}`}
				>
					<BackgroundVideo
						src="/video/tech-s.mp4"
						type="video/mp4"
						preload="auto"
						className="absolute bottom-0 left-0 w-screen h-full object-cover object-[0_90%] lg:w-[50vw] lg:h-[100vh]"
					/>
					<div className="relative flex justify-between items-start w-full px-[1rem] overflow-hidden lg:flex lg:flex-col lg:items-start lg:px-0">
						<h1 className="w-[6rem] text-[#60B5FF] text-[1rem] font-bold uppercase pt-[0.5rem] md:w-[10rem] lg:pt-0 lg:pb-[0.5rem] md:text-[1.5rem] lg:w-fit lg:pl-[1rem] lg:text-[1.5rem] lg:order-5">
							Tiewei
						</h1>

						{/* Button */}
						<button
							onClick={handleClick}
							className="relative bottom-[1.6rem] text-[#60B5FF] text-[1.1rem] font-bold bg-[#CB0404] rounded-b-[5rem] border-[2px] border-[#60B5FF] cursor-pointer overflow-hidden w-[3.1rem] h-[3.2rem] md:w-[4.5rem] md:h-[4rem] lg:w-[5rem] lg:h-[4.5rem] lg:bottom-auto lg:mx-0 lg:rounded-b-none lg:rounded-tr-[3rem] lg:rounded-br-[3rem] lg:my-[1rem] lg:right-[2.7rem] lg:uppercase lg:order-1 motion-preset-pulse motion-duration-2000"
						>
							{/* <span className="relative top-[0.4rem] text-[1rem] lg:top-0 lg:right-[-1.2rem]">
								me
							</span> */}
							<FaHome
								size={30}
								className="relative  left-[0.5rem] bottom-[0.2rem] md:left-[0.55rem] md:bottom-[0.65rem] md:size-[3rem] lg:left-[1rem] lg:bottom-0"
							/>
						</button>

						<h4 className="w-[6rem] text-[1rem] text-[#60B5FF] font-bold text-right uppercase pt-[0.5rem] md:w-[10rem] md:text-[1.5rem] lg:text-left lg:pb-[0.5rem] lg:pt-0 lg:w-fit lg:pl-[1rem] lg:text-[2.5rem] lg:order-4">
							Developer
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
