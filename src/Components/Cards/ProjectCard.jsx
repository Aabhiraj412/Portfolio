import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ icon, name, description, githubLink, index = 0 }) => {
	const [imageError, setImageError] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const gradients = [
		"from-green-400 to-blue-500",
		"from-blue-400 to-purple-500",
		"from-purple-400 to-pink-500",
		"from-pink-400 to-red-500",
		"from-red-400 to-orange-500",
		"from-orange-400 to-yellow-500",
	];

	const cardGradient = gradients[index % gradients.length];

	const handleImageError = () => {
		setImageError(true);
	};

	const getIconFallback = () => {
		// Extract category from project name or description for better icons
		const nameAndDesc = (name + " " + description).toLowerCase();

		if (
			nameAndDesc.includes("ai") ||
			nameAndDesc.includes("chatbot") ||
			nameAndDesc.includes("assistant")
		)
			return "🤖";
		if (nameAndDesc.includes("game") || nameAndDesc.includes("puzzle"))
			return "🎮";
		if (nameAndDesc.includes("mobile") || nameAndDesc.includes("android"))
			return "📱";
		if (nameAndDesc.includes("web") || nameAndDesc.includes("chat"))
			return "🌐";
		if (nameAndDesc.includes("database") || nameAndDesc.includes("erp"))
			return "🏢";
		if (nameAndDesc.includes("security") || nameAndDesc.includes("guard"))
			return "🔒";
		if (nameAndDesc.includes("news")) return "📰";
		if (nameAndDesc.includes("resume") || nameAndDesc.includes("cv"))
			return "📄";
		if (nameAndDesc.includes("social") || nameAndDesc.includes("animal"))
			return "🐾";
		if (nameAndDesc.includes("data") || nameAndDesc.includes("crawler"))
			return "📊";
		return "⚡";
	};

	return (
		<motion.div
			whileHover={{
				scale: 1.02,
				y: -4,
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 25,
				},
			}}
			whileTap={{ scale: 0.98 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className="group relative overflow-hidden bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl rounded-2xl border border-gray-600/40 hover:border-green-400/60 shadow-2xl hover:shadow-green-500/25 transition-all duration-500 h-full flex flex-col"
		>
			{/* Subtle Border Glow Effect Only */}
			<div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-green-400/40 transition-all duration-500"></div>

			{/* Content */}
			<div className="relative p-8 flex flex-col h-full">
				{/* Project Icon with Enhanced Animation */}
				<div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-700/60 to-gray-800/60 border border-gray-600/40 group-hover:border-green-400/50 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 overflow-hidden">
					{!imageError ? (
						<motion.img
							src={icon}
							alt={`${name} icon`}
							className="w-12 h-12 object-contain filter group-hover:brightness-125 transition-all duration-300"
							onError={handleImageError}
							whileHover={{ scale: 1.1 }}
						/>
					) : (
						<motion.div
							className="text-2xl filter group-hover:scale-125 transition-all duration-300"
							whileHover={{ rotate: 10 }}
						>
							{getIconFallback()}
						</motion.div>
					)}
				</div>

				{/* Project Details */}
				<div className="text-center flex-grow flex flex-col">
					<motion.h2
						className="text-xl font-bold text-gray-100 mb-4 group-hover:text-green-400 transition-colors duration-300 line-clamp-2"
						whileHover={{ scale: 1.02 }}
					>
						{name}
					</motion.h2>
					<p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed flex-grow line-clamp-4">
						{description}
					</p>
				</div>

				{/* Enhanced GitHub Link */}
				<motion.div className="mt-6 text-center">
					{githubLink ? (
						<motion.a
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-green-400/50 text-white font-semibold hover:border-green-400/80 hover:bg-gradient-to-r hover:from-green-400/10 hover:to-blue-500/10 hover:text-green-400 transition-all duration-300 group/btn"
						>
							<span>View on GitHub</span>
							<motion.svg
								className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								whileHover={{ x: 2 }}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</motion.svg>
						</motion.a>
					) : (
						<motion.div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700/60 to-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-500/40 text-gray-400 font-semibold cursor-not-allowed">
							<span>Private Repository</span>
							<svg
								className="ml-2 w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/>
							</svg>
						</motion.div>
					)}
				</motion.div>

				{/* Enhanced Animated Bottom Border */}
				<div className="mt-6 pt-4 border-t border-gray-600/30">
					<motion.div
						className={`h-1 bg-gradient-to-r ${cardGradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: isHovered ? 1 : 0 }}
						transition={{ duration: 0.5 }}
					/>
				</div>

				{/* Project Number Badge */}
				<div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-gray-700/80 to-gray-800/80 backdrop-blur-sm rounded-full border border-gray-600/40 flex items-center justify-center">
					<span className="text-xs font-bold text-gray-300 group-hover:text-green-400 transition-colors duration-300">
						{(index + 1).toString().padStart(2, "0")}
					</span>
				</div>
			</div>
		</motion.div>
	);
};

ProjectCard.propTypes = {
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	githubLink: PropTypes.string,
	index: PropTypes.number,
};

export default ProjectCard;
