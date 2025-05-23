export default function Contact() {
	return (
		<div className="w-[70%] h-auto mx-auto flex border-[0.1px] border-cyan-200">
			<div></div>
			<form className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Name
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
					<label className="block text-sm font-medium text-gray-700">
						Email
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
					<label className="block text-sm font-medium text-gray-700">
						Message
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
