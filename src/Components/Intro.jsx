import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, cardHover } from "./shared/animations";
import {
	GRADIENTS,
	COLORS,
	SPACING,
	BORDER_RADIUS,
	BACKDROP_BLUR,
} from "./shared/designSystem";

export const Intro = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({
				x: (e.clientX / window.innerWidth) * 2 - 1,
				y: (e.clientY / window.innerHeight) * 2 - 1,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const linkItems = [
		{
			title: "GitHub",
			link: "https://github.com/Aabhiraj412",
			desc: "Explore my projects and repositories on GitHub.",
			gradient: GRADIENTS.primary,
			icon: "🚀",
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/abhiraj-dixit-960a50244/",
			desc: "Connect with me on LinkedIn and stay updated.",
			gradient: GRADIENTS.secondary,
			icon: "💼",
		},
		{
			title: "Leetcode",
			link: "https://leetcode.com/aabhiraj412/",
			desc: "Solve coding challenges and improve my algorithm skills.",
			gradient: GRADIENTS.tertiary,
			icon: "⚡",
		},
		{
			title: "GeeksForGeeks",
			link: "https://www.geeksforgeeks.org/user/abhiraj_dixit/",
			desc: "Find my tutorials and problem-solving insights here.",
			gradient: GRADIENTS.quaternary,
			icon: "📚",
		},
		{
			title: "Resume",
			link: "/Resume.pdf",
			desc: "View my resume and professional experience.",
			gradient: GRADIENTS.quinary,
			icon: "📄",
		},
	];

	return (
		<section
			className={`relative min-h-screen bg-gradient-to-br ${GRADIENTS.sectionBg} overflow-hidden ${SPACING.section}`}
		>
			{/* Enhanced Animated Background Elements */}
			<div className="absolute inset-0 opacity-25">
				<motion.div
					className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					style={{
						transform: `translate(${mousePosition.x * 20}px, ${
							mousePosition.y * 20
						}px)`,
					}}
				/>
				<motion.div
					className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.4, 0.6, 0.4],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					style={{
						transform: `translate(${mousePosition.x * -15}px, ${
							mousePosition.y * -15
						}px)`,
					}}
				/>
				<motion.div
					className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.1, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "linear",
					}}
					style={{
						transform: `translate(-50%, -50%) translate(${
							mousePosition.x * 10
						}px, ${mousePosition.y * 10}px)`,
					}}
				/>
			</div>

			{/* Enhanced Floating Particles */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-1 h-1 bg-green-400/60 rounded-full"
						animate={{
							y: [-20, -100],
							opacity: [0, 1, 0],
							scale: [0, 1, 0],
						}}
						transition={{
							duration: Math.random() * 3 + 2,
							repeat: Infinity,
							delay: Math.random() * 5,
							ease: "easeOut",
						}}
						style={{
							insetInlineStart: `${Math.random() * 100}%`,
							insetBlockStart: `${Math.random() * 100}%`,
						}}
					/>
				))}
			</div>

			{/* Main Content */}
			<motion.div
				className="relative z-10"
				initial="hidden"
				animate="visible"
				variants={staggerContainer}
			>
				{/* Enhanced Heading */}
				<motion.div variants={fadeInUp} className="text-center mb-12">
					<motion.h2
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
						Hello Everyone,
					</motion.h2>
					<motion.div
						className={`w-32 h-1 bg-gradient-to-r ${GRADIENTS.subheading} mx-auto rounded-full`}
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
					/>
				</motion.div>

				{/* Enhanced Intro Paragraph */}
				<motion.div
					variants={fadeInUp}
					className="max-w-5xl mx-auto mb-16"
				>
					<div
						className={`bg-gradient-to-r ${GRADIENTS.cardBg} ${BACKDROP_BLUR.heavy} ${BORDER_RADIUS.card} ${SPACING.card} border ${COLORS.border.primary} shadow-2xl`}
					>
						<p className="text-lg md:text-xl text-gray-300 leading-relaxed">
							I'm{" "}
							<motion.span
								className={`text-transparent bg-gradient-to-r ${GRADIENTS.subheading} bg-clip-text font-bold text-2xl`}
								whileHover={{ scale: 1.05 }}
							>
								Abhiraj Dixit
							</motion.span>
							, and I am a passionate and dedicated Full Stack
							Developer with a keen interest in building
							innovative solutions and exploring new technologies.
							Currently, I am pursuing a B.Tech in Computer
							Science & Data Science with current aggregate of{" "}
							<motion.span
								className="text-green-400 font-semibold"
								whileHover={{ scale: 1.1 }}
							>
								8.4
							</motion.span>{" "}
							at Maharana Pratap Engineering College, Kanpur,
							where I am actively involved in software development
							and AI research. As a third-year student, I've
							already contributed to several impactful projects,
							utilizing technologies such as{" "}
							<motion.span
								className="text-blue-400 font-semibold"
								whileHover={{ scale: 1.05 }}
							>
								MERN Stack
							</motion.span>
							,{" "}
							<motion.span
								className="text-purple-400 font-semibold"
								whileHover={{ scale: 1.05 }}
							>
								React Native
							</motion.span>
							, and{" "}
							<motion.span
								className="text-orange-400 font-semibold"
								whileHover={{ scale: 1.05 }}
							>
								AI frameworks
							</motion.span>{" "}
							like Hugging Face.
						</p>
					</div>
				</motion.div>

				{/* Enhanced Links Grid */}
				<motion.div
					variants={staggerContainer}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
				>
					{linkItems.map((item, index) => (
						<motion.div
							key={index}
							variants={fadeInUp}
							whileHover={cardHover}
							whileTap={{ scale: 0.95 }}
							className="group"
						>
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className={`block relative overflow-hidden bg-gradient-to-br ${GRADIENTS.cardBg} ${BACKDROP_BLUR.heavy} ${BORDER_RADIUS.card} border ${COLORS.border.primary} hover:border-green-400/50 shadow-2xl hover:shadow-green-500/25 transition-all duration-500`}
							>
								{/* Subtle Border Glow Effect Only */}
								<motion.div
									className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-green-400/30 transition-all duration-500"
									whileHover={{
										boxShadow:
											"0 0 20px rgba(34, 197, 94, 0.2), inset 0 0 20px rgba(34, 197, 94, 0.1)",
									}}
								/>

								{/* Content */}
								<div
									className={`relative ${SPACING.card} text-center`}
								>
									<motion.div
										className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
										whileHover={{ rotate: [0, -10, 10, 0] }}
										transition={{ duration: 0.5 }}
									>
										{item.icon}
									</motion.div>
									<h3
										className={`text-xl font-bold ${COLORS.text.primary} mb-4 group-hover:text-green-400 transition-colors duration-300`}
									>
										{item.title}
									</h3>
									<p
										className={`${COLORS.text.tertiary} group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed`}
									>
										{item.desc}
									</p>

									{/* Enhanced Animated Arrow */}
									<motion.div
										className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
										initial={{ y: 10 }}
										whileHover={{ y: 0 }}
									>
										<span className="inline-flex items-center text-green-400 text-sm font-medium">
											Explore
											<motion.svg
												className="ml-2 w-4 h-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												whileHover={{ x: 5 }}
												transition={{
													type: "spring",
													stiffness: 400,
												}}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17 8l4 4m0 0l-4 4m4-4H3"
												/>
											</motion.svg>
										</span>
									</motion.div>
								</div>
							</a>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
};
