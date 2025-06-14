import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "../Reusable/MediaQueryHook";
import BackToTop from "../Reusable/BackToTop";

export default function Contact() {
	const isLarge = useMediaQuery(1024);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [statusMessage, setStatusMessage] = useState("");
	const [statusType, setStatusType] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatusMessage("");
		setStatusType("");

		try {
			const response = await fetch(
				"https://portfolio-backend-rd7b.onrender.com/api/contact",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				setStatusMessage("Message sent successfully!");
				setStatusType("success");
				setFormData({ name: "", email: "", message: "" });
			} else {
				const errorData = await response.json();
				setStatusMessage(
					errorData.message || "Failed to send message. Please try again."
				);
				setStatusType("error");
			}
		} catch (error) {
			console.error("Error:", error);
			setStatusMessage("Something went wrong. Please try again.");
			setStatusType("error");
		}
	};

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={Contact}
				initial={{
					opacity: 0,
					x: isLarge ? 0 : 100,
					y: isLarge ? 100 : 0,
				}}
				animate={{ opacity: 1, x: 0, y: 0 }}
				exit={{
					opacity: 0,
					x: isLarge ? 0 : 100,
					y: isLarge ? 100 : 0,
				}}
				transition={{ duration: 0.8 }}
				className="w-screen h-auto bg-[#33c9ff] font-tinos  leading-[2rem] py-[5rem] text-[1.7rem] lg:text-[1.5rem]"
			>
				<div className="bg-[#1c1860] h-auto flex flex-col justify-between mx-[1rem] px-[1rem] rounded-tl-[4rem] rounded-br-[4rem] lg:w-[80%] lg:mx-auto lg:flex-row lg:gap-[4rem]  lg:py-[5rem] lg:px-[2rem]">
					<div className="w-full flex flex-col lg:justify-center pt-[2rem] lg:pt-0">
						<h1 className="font-unna font-bold leading-[3rem] mt-[5rem] text-[2.5rem] text-cyan-300 mb-[1.5rem] lg:text-[3rem]">
							Let's collaborate
						</h1>
						<p className="mb-[1rem]">
							I'm always open to discussing new projects, creative ideas, or
							opportunities to be part of your vision. Whether you have a
							question, want to work together, or just want to say hi, feel free
							to reach out!
						</p>
					</div>
					<form
						onSubmit={handleSubmit}
						className="w-full flex flex-col space-y-4 pb-[5rem] lg:pb-0"
					>
						<div>
							<label className="block font-unna font-thin text-cyan-400 text-[1.4rem]">
								Name:
							</label>
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								className="w-full px-4 py-2 border border-cyan-300 rounded-[1rem] text-[#EAE4D5]"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="block font-unna font-thin text-cyan-400 text-[1.4rem]">
								Email:
							</label>
							<input
								type="email"
								name="email"
								placeholder="Your Email"
								className="w-full px-4 py-2 border border-cyan-300 rounded-[1rem] text-[#EAE4D5]"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="block font-unna font-thin text-cyan-400 text-[1.4rem]">
								Message:
							</label>
							<textarea
								name="message"
								rows="5"
								placeholder="Your Message"
								className="w-full px-4 py-2 border border-cyan-300 rounded-[1rem] text-[#EAE4D5]"
								value={formData.message}
								onChange={handleChange}
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full uppercase border text-[1rem] px-6 py-3 rounded-[1rem] text-cyan-200 border-cyan-500 shadow-deep hover:bg-cyan-500 hover:font-bold hover:text-[#0C0950] transition-all duration-500"
						>
							Send Message
						</button>
						{statusMessage && (
							<p
								className={`mt-4 text-center text-[1rem] font-semibold ${
									statusType === "success" ? "text-green-500" : "text-red-400"
								}`}
							>
								{statusMessage}
							</p>
						)}
					</form>
				</div>
				<BackToTop />
			</motion.div>
		</AnimatePresence>
	);
}
