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
		<div className="w-[80%] h-auto mx-auto flex flex-col justify-between border-[0.1px] border-cyan-200 mt-[5rem] mb-[10rem] py-[5rem]">
			<div></div>
			<form onSubmit={handleSubmit} className="w-[50%] space-y-4">
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
