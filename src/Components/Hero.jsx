import { motion } from "framer-motion";
import { GRADIENTS } from "./shared/designSystem";

export const Hero = () => {
	return (
		<div className="relative">
			{/* Anchor for Navigation */}
			<div id="home" className="mt-0 w-100 h-1"></div>

			{/* Hero Section */}
			<motion.header
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 mt-16 md:mt-18 overflow-hidden"
			>
				{/* Optimized Static Background Elements */}
				<div className="absolute inset-0 opacity-30">
					<div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-green-400/25 to-blue-500/25 rounded-full blur-3xl"></div>
					<div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-purple-400/25 to-pink-500/25 rounded-full blur-3xl"></div>
				</div>

				{/* Hero Content */}
				<div className="relative z-10 text-center max-w-6xl mx-auto">
					{/* Title */}
					<motion.h1
						// initial={{ scale: 0.8, opacity: 0 }}
						// animate={{ scale: 1, opacity: 1 }}
						// transition={{ duration: 1, ease: "easeOut" }}
						// className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
						className={`text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r ${GRADIENTS.heading} bg-clip-text text-transparent`}
						animate={{
							backgroundPosition: [
								"0% 50%",
								"100% 50%",
								"0% 50%",
							],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "linear",
						}}
						style={{
							backgroundSize: "200% 200%",
						}}
					>
						Abhiraj Dixit
					</motion.h1>

					{/* Subtitle */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1.2,
							delay: 0.3,
							ease: "easeOut",
						}}
						className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-600/30 shadow-2xl mb-6 sm:mb-8 mx-2 sm:mx-0"
					>
						<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
							Crafting seamless code, breaking barriers, and
							embracing the future
						</p>
					</motion.div>

					{/* Tagline */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1.2,
							delay: 0.5,
							ease: "easeOut",
						}}
						className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-2 sm:px-0"
					>
						{[
							{
								title: "Full Stack Developer",
								icon: "💻",
								gradient: "from-green-400 to-blue-500",
							},
							{
								title: "AI Enthusiast",
								icon: "🤖",
								gradient: "from-blue-400 to-purple-500",
							},
							{
								title: "Security Explorer",
								icon: "🔒",
								gradient: "from-purple-400 to-pink-500",
							},
						].map((item, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.02 }}
								className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-green-500/10 transition-all duration-300 p-4 sm:p-6"
							>
								<div
									className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl sm:rounded-2xl`}
								></div>
								<div className="relative">
									<div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
										{item.icon}
									</div>
									<p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-100 group-hover:text-green-400 transition-colors duration-300">
										{item.title}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.header>
		</div>
	);
};
