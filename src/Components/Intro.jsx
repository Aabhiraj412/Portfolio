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
			link: "https://www.linkedin.com/in/abhiraj-dixit/",
			desc: "Connect with me on LinkedIn and stay updated.",
			gradient: GRADIENTS.secondary,
			icon: "💼",
		},
		{
			title: "LeetCode",
			link: "https://leetcode.com/u/Aabhiraj412/",
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
			{/* Optimized Static Background */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-green-400/25 to-blue-500/25 rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/25 to-pink-500/25 rounded-full blur-3xl" />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 rounded-full blur-3xl" />
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
						About Me
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
							I&apos;m{" "}
							<motion.span
								className={`text-transparent bg-gradient-to-r ${GRADIENTS.subheading} bg-clip-text font-bold text-2xl`}
								whileHover={{ scale: 1.05 }}
							>
								Abhiraj Dixit
							</motion.span>
							, an{" "}
							<motion.span className="text-green-400 font-semibold" whileHover={{ scale: 1.03 }}>
								Associate Software Developer at Finastra
							</motion.span>
							. I work on fintech backend products, defect remediation, and build and deployment automation. I also build web and mobile applications with React, Node.js, and React Native.
						</p>
					</div>
				</motion.div>

				{/* Career and education */}
				<motion.div
					variants={fadeInUp}
					className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16"
				>
					<article className="rounded-2xl border border-gray-600/30 bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 md:p-8 shadow-xl">
						<p className="text-sm uppercase tracking-[0.2em] text-green-400 mb-3">Experience</p>
						<h3 className="text-2xl font-bold text-white">Finastra</h3>
						<p className="text-blue-300 mt-1">Associate Software Developer</p>
						<p className="text-sm text-gray-400 mt-1">India · July 2026 – Present</p>
						<ul className="mt-5 space-y-2 text-sm leading-relaxed text-gray-300 list-disc pl-5">
							<li>Develop and maintain PayplusUSA, ACH, and PARC fintech products.</li>
							<li>Fix defects across C++ and C# codebases, including COM and ASP.NET components.</li>
							<li>Automate builds and CI/CD workflows with Azure, GitHub Actions, and Jenkins.</li>
						</ul>
					</article>
					<article className="rounded-2xl border border-gray-600/30 bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 md:p-8 shadow-xl">
						<p className="text-sm uppercase tracking-[0.2em] text-green-400 mb-3">Education</p>
						<h3 className="text-xl font-bold text-white">Maharana Pratap Engineering College</h3>
						<p className="text-gray-300 mt-2">B.Tech, Computer Science (Data Science)</p>
						<p className="text-sm text-gray-400 mt-1">Kanpur · 2022–2026 · CGPA 8.4/10</p>
						<div className="mt-5 border-t border-gray-600/40 pt-4 text-sm leading-relaxed text-gray-400">
							<p>Intermediate (PCM): 85%</p>
							<p>High school: 87%</p>
							<p className="mt-2">Saint James Senior Secondary School, Hardoi · Intermediate 2020–2021 · High school 2018–2019</p>
						</div>
					</article>
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
