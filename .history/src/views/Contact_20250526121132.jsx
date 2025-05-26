import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can send formData to your backend or email service here
		console.log(formData);
		alert("Message sent!");
	};

	return (
		<AnimatePresence mode="wait">
			<motion.div className="bg-[#1c1860] h-auto flex flex-col justify-between mx-[1rem] mt-[5rem] mb-[10rem] px-[1rem] rounded-tl-[4rem] rounded-br-[4rem] lg:w-[80%] lg:mx-auto lg:flex-row lg:gap-[4rem]  lg:py-[5rem] lg:px-[2rem]">
				<div className="w-full flex flex-col lg:justify-center pt-[2rem] lg:pt-0">
					<h1 className="font-unna font-bold  text-[2.5rem] text-cyan-200">
						Let's collaborate
					</h1>
					<p className="font-thin text-[#EAE4D5] text-[1.4rem] leading-[2.5rem] mb-[2rem]">
						I'm always open to discussing new projects, creative ideas, or
						opportunities to be part of your vision. Whether you have a
						question, want to work together, or just want to say hi, feel free
						to reach out!
					</p>
				</div>
				<form
					onSubmit={handleSubmit}
					className="w-full space-y-4 pb-[5rem] lg:pb-0"
				>
					<div>
						<label className="block font-unna font-thin text-cyan-200 text-[1.4rem]">
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
						<label className="block font-unna font-thin text-cyan-200 text-[1.4rem]">
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
						<label className="block font-unna font-thin text-cyan-200 text-[1.4rem]">
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
						className="w-full uppercase text-cyan-200 border border-cyan-500 text-[1rem] px-6 py-3 rounded-[1rem] hover:bg-cyan-500 hover:text-[#0C0950] transition-all duration-500"
					>
						Send Message
					</button>
				</form>
			</div>
		</AnimatePresence>
	);
}
