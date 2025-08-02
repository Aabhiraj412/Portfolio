import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Border } from "./Border";

// Emoji replacement function
const replaceEmojis = (text) => {
	const emojiMap = {
		":-)": "🙂",
		":)": "😊",
		":(": "😢",
		":-(": "😞",
		":D": "😁",
		":-D": "😃",
		";)": "😉",
		";-)": "😉",
		"(y)": "👍",
		"(Y)": "👍",
		"(n)": "👎",
		"(N)": "👎",
		"<3": "❤️",
		"</3": "💔",
		":P": "😛",
		":-P": "😛",
		":o": "😮",
		":-o": "😮",
		":|": "😐",
		":-|": "😐",
		"(cool)": "😎",
		"(fire)": "🔥",
		"(star)": "⭐",
		"(coffee)": "☕",
		"(rocket)": "🚀",
		"(party)": "🎉",
		"(clap)": "👏",
		"(wave)": "👋",
	};

	let result = text;
	Object.entries(emojiMap).forEach(([emoji, replacement]) => {
		result = result.replace(
			new RegExp(emoji.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
			replacement
		);
	});
	return result;
};

export const Contact = () => {
	const [formData, setFormData] = useState({
		to_name: "Abhiraj",
		from_name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
				staggerChildren: 0.15,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 30,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
				type: "spring",
				stiffness: 80,
				damping: 20,
			},
		},
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		// Store raw value without emoji processing to prevent constant re-renders
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");

		try {
			// Apply emoji replacement only when submitting
			const processedFormData = {
				...formData,
				message: replaceEmojis(formData.message),
			};

			const response = await emailjs.send(
				"service_avp9z2v",
				// "template_abmi0t8",
				"template_yfc19md",
				processedFormData,
				"NeIgzMdg4oJuNe1NQ"
			);

			if (response.status === 200) {
				setStatus("Message sent successfully!");
				setFormData({ from_name: "", email: "", message: "" });
			} else {
				setStatus("Failed to send message. Please try again later.");
			}
		} catch (error) {
			setStatus("Error sending message. Please try again later.");
		}
	};

	const contactItems = [
		{
			title: "Email",
			value: "aabhiraj412@gmail.com",
			link: "mailto:aabhiraj412@gmail.com",
			icon: "📧",
			gradient: "from-green-400 to-blue-500",
		},
		{
			title: "Phone",
			value: "+91 9919506551",
			link: "tel:+919919506551",
			icon: "📞",
			gradient: "from-blue-400 to-purple-500",
		},
	];

	return (
		<div className="relative px-6 md:px-12 py-12 md:py-20">
			{/* Section Background */}
			<div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-600/20"></div>

			<div className="relative z-10">
				<Border name="contact" />

				{/* Section Heading */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={itemVariants}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
						Contact Information
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>
					<div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600/30 shadow-2xl max-w-2xl mx-auto">
						<p className="text-lg text-gray-300">
							Feel free to reach out!
						</p>
					</div>
				</motion.div>

				{/* Contact Details Grid */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={containerVariants}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
				>
					{contactItems.map((item, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{
								scale: 1.05,
								y: -5,
								transition: {
									type: "spring",
									stiffness: 300,
									damping: 20,
								},
							}}
							className="group"
						>
							<a
								href={item.link}
								className="block relative overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 p-8 text-center"
							>
								{/* Gradient Overlay */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
								></div>

								{/* Content */}
								<div className="relative">
									<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
										{item.icon}
									</div>
									<h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-green-400 transition-colors duration-300">
										{item.title}
									</h3>
									<p className="text-green-400 group-hover:text-green-300 transition-colors duration-300 font-medium">
										{item.value}
									</p>
								</div>
							</a>
						</motion.div>
					))}
				</motion.div>

				{/* Contact Form */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={itemVariants}
					className="max-w-2xl mx-auto"
				>
					<form
						className="relative overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-600/30 shadow-2xl p-8"
						onSubmit={handleSubmit}
					>
						{/* Form Header */}
						<div className="text-center mb-8">
							<h3 className="text-2xl font-bold text-gray-100 mb-2">
								Send a Message
							</h3>
							<div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
						</div>

						{/* Form Fields */}
						<div className="space-y-6">
							{/* Name Input */}
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-300 mb-2"
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
									className="w-full p-4 rounded-xl bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300"
									required
								/>
							</div>

							{/* Email Input */}
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-300 mb-2"
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
									className="w-full p-4 rounded-xl bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300"
									required
								/>
							</div>

							{/* Message Input */}
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-300 mb-2"
								>
									Message
									<span className="text-xs text-gray-400 ml-2">
										(Try: :-) :( (y) (n) &lt;3 (fire)
										(rocket) (party))
									</span>
								</label>
								<textarea
									id="message"
									name="message"
									placeholder="Write your message here... Try typing :-) for smileys!"
									value={formData.message}
									onChange={handleChange}
									rows={5}
									className="w-full p-4 rounded-xl bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300 resize-none"
									required
								></textarea>
								{/* Emoji preview */}
								{formData.message && (
									<div className="mt-2 p-2 bg-gray-800/50 rounded-lg border border-gray-600/20">
										<span className="text-xs text-gray-400">
											Preview:{" "}
										</span>
										<span className="text-sm text-gray-200">
											{replaceEmojis(formData.message)}
										</span>
									</div>
								)}
							</div>
						</div>

						{/* Submit Button */}
						<motion.button
							type="submit"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-green-400/50 text-white font-semibold hover:border-green-400/80 hover:bg-gradient-to-r hover:from-green-400/10 hover:to-blue-500/10 hover:text-green-400 transition-all duration-300"
						>
							Send Message
						</motion.button>

						{/* Status Message */}
						{status && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className="mt-4 p-3 rounded-xl bg-green-400/10 border border-green-400/30 text-center"
							>
								<p className="text-green-400 font-medium">
									{status}
								</p>
							</motion.div>
						)}
					</form>
				</motion.div>
			</div>
		</div>
	);
};
