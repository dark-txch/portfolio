import BackgroundVideo from "../components/BackgroundVideo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [slideOut, setSlideOut] = useState(false);
  
  useEffect(() => {
    if (!slideOut) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Add this for mobile
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto"; // Add this for mobile
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [slideOut]);

  const handleClick = () => {
    setSlideOut(!slideOut);
  };

  return (
    <>
      <div className="w-screen h-full">
        {/* Add fixed positioning and overflow-hidden to header */}
        <header className="w-screen h-[100vh] bg-gradient-to-b from-[#5409DA] to-[#4E71FF] overflow-hidden fixed top-0 left-0 lg:relative lg:flex lg:justify-center lg:items-center">
          {/* Rest of your header content remains the same */}
          <div
            className={`relative w-screen h-[50dvh] flex flex-col justify-end items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] transition-all duration-500 ease-in-out z-20 ${
              slideOut
                ? "-translate-y-full lg:-translate-y-0 lg:-translate-x-full"
                : ""
            }`}
          >
            {/* ... your existing content ... */}
          </div>

          <div
            className={`relative w-screen h-[50dvh] flex flex-col justify-start items-center lg:h-[100vh] lg:flex lg:justify-center lg:w-[50vw] transition-all duration-500 ease-in-out z-20 ${
              slideOut
                ? "translate-y-full lg:-translate-y-0 lg:translate-x-full"
                : ""
            }`}
          >
            {/* ... your existing content ... */}
          </div>
        </header>

        {/* Add mt-[100vh] to main to push it below the fixed header */}
        <main className={`mt-[100vh] ${slideOut ? "" : "-translate-y-full"}`}>
          {/* ... your existing main content ... */}
        </main>
      </div>
    </>
  );
}

				{/* HOME PARENT CONTAINER */}
		        <main className={`mt-[100vh] ${slideOut ? "" : "-translate-y-full"}`}>
					<header className="w-screen h-screen bg-[#0C0950]">
						<nav className="origin-top bg-blue-500 text-white w-screen h-[7rem] shadow-lg flex items-center justify-center">
							<ul>
								<li>
									<Link to="/hero">Ebenezer Tiewei</Link>
								</li>
							</ul>
							<ul className="flex gap-8 text-lg">
								<Link to="/home">Home</Link>
								<Link to="/about">About</Link>
								<Link to="/projects">Projectt</Link>
								<Link to="/contact">Contact</Link>
							</ul>
						</nav>
					</header>
				</main>
			</div>
		</>
	);
}
