import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Import the emailjs library
import { Border } from "./Border";

export const Contact = () => {
	const [formData, setFormData] = useState({
		to_name: "Abhiraj",
		from_name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	// Handle form input changes
	const handleChange = (e) => {
		const { name, value } = e.target;  // Fixed this line
		setFormData({ ...formData, [name]: value });
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");

		try {
			// Send email using EmailJS
			const response = await emailjs.send(
				"service_avp9z2v", // Service ID (EmailJS Gmail service)
				"template_abmi0t8", // Template ID
				formData, // Send form data (name, email, message)
				"NeIgzMdg4oJuNe1NQ" // Public key (User ID)
			);

			if (response.status === 200) {
				setStatus("Message sent successfully!");
				setFormData({ from_name: "", email: "", message: "" });
			} else {
				setStatus("Failed to send message. Please try again later.");
			}
		} catch (error) {
			console.log(error);
			setStatus("Error sending message. Please try again later.");
		}
	};

	return (
		<div>
			<Border name="contact" />
			<div className="mt-8 text-center">
				{/* Contact Heading */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1 }}
					className="text-2xl md:text-3xl text-[#00FF66] mb-4 font-bold"
				>
					Contact Information
				</motion.h2>
				<p className="mb-4 text-gray-300">Feel free to reach out!</p>

				{/* Contact Details */}
				<div className="mb-8">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.2 }}
						className="text-gray-300"
					>
						Email:{" "}
						<a
							href="mailto:aabhiraj412@gmail.com"
							className="text-[#00FF66] underline"
						>
							aabhiraj412@gmail.com
						</a>
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.4 }}
						className="text-gray-300"
					>
						Phone:{" "}
						<span className="text-[#00FF66]">+91 9919506551</span>
					</motion.p>
				</div>
			</div>

			<motion.div className="mt-8 text-center">
				{/* Contact Form */}
				<motion.form
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1.6 }}
					className="bg-gradient-to-tr from-gray-800 to-gray-900 p-8 rounded-lg shadow-md mx-auto max-w-lg"
					onSubmit={handleSubmit}
				>
					<h3 className="text-xl font-semibold text-[#00FF66] mb-6">
						Send a Message
					</h3>

					{/* Name Input */}
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-sm text-gray-300 mb-2"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="from_name"
							placeholder="Enter your name"
							value={formData.from_name}
							onChange={handleChange}
							className="w-full p-3 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
							required
						/>
					</div>

					{/* Email Input */}
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-sm text-gray-300 mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
							value={formData.email}
							onChange={handleChange}
							className="w-full p-3 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
							required
						/>
					</div>

					{/* Message Input */}
					<div className="mb-6">
						<label
							htmlFor="message"
							className="block text-sm text-gray-300 mb-2"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							placeholder="Write your message here"
							value={formData.message}
							onChange={handleChange}
							className="w-full p-3 h-32 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00FF66]"
							required
						></textarea>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="px-6 py-2 text-lg font-semibold rounded-md bg-[#00FF66] text-gray-900 hover:bg-[#8A2BE2] hover:text-white transition duration-300"
					>
						Send Message
					</button>

					{/* Status Message */}
					{status && <p className="mt-4 text-[#00FF66]">{status}</p>}
				</motion.form>
			</motion.div>
		</div>
	);
};
