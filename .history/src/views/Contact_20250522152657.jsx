import React, { useState } from "react";

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
		<div className="bg-[#1c1860] w-[80%] h-auto mx-auto flex flex-col justify-between border-[0.1px] border-cyan-200 mt-[5rem] mb-[10rem] lg:flex-row  lg:py-[5rem]">
			<div className="w-screen mx-auto">
				<h1 className="font-unna font-bold  text-[2.5rem] text-cyan-200 px-[1rem] ">
					Let's collaborate
				</h1>
				<p></p>
			</div>
			<form onSubmit={handleSubmit} className="w-full space-y-4  lg:w-[50%]">
				<div>
					<label className="block font-unna font-bold text-cyan-200 text-[1.4rem]">
						Name:
					</label>
					<input
						type="text"
						name="name"
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className="block font-unna font-bold text-cyan-200 text-[1.4rem]">
						Email:
					</label>
					<input
						type="email"
						name="email"
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label className="block font-unna font-bold text-cyan-200 text-[1.4rem]">
						Message:
					</label>
					<textarea
						name="message"
						rows="5"
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
				>
					Send Message
				</button>
			</form>
		</div>
	);
}
