import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Border } from "./Border";
import ProjectCard from "./Cards/ProjectCard";
import projects from "./DATA/Projects/Projects.json";

export const Projects = () => {
	const [showAll, setShowAll] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const initialProjectsToShow = 3;

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.3,
				staggerChildren: 0.05,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
				staggerChildren: 0.02,
				staggerDirection: -1,
			},
		},
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 20,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		exit: {
			opacity: 0,
			y: -20,
			scale: 0.9,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	const headingVariants = {
		hidden: {
			opacity: 0,
			y: 30,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const toggleViewMore = useCallback(async () => {
		if (isAnimating) return;

		setIsAnimating(true);
		await new Promise((resolve) => setTimeout(resolve, 100));
		setShowAll((prev) => !prev);

		setTimeout(() => {
			setIsAnimating(false);
		}, 600);
	}, [isAnimating]);

	const displayedProjects = showAll
		? projects
		: projects.slice(0, initialProjectsToShow);
	const hasMoreProjects = projects.length > initialProjectsToShow;

	return (
		<section className="relative min-h-screen px-6 md:px-12 py-16 md:py-24">
			{/* Enhanced Section Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black/60 to-gray-800/40 backdrop-blur-sm rounded-3xl border border-gray-600/20 shadow-2xl"></div>

			{/* Animated Background Elements */}
			<div className="absolute inset-0 opacity-20 pointer-events-none">
				<div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				<Border name="projects" />

				{/* Enhanced Section Heading */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={headingVariants}
					className="text-center mb-16"
				>
					<motion.h2
						className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
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
						My Projects
					</motion.h2>
					<motion.div
						className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.3 }}
					/>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
					>
						Explore my diverse collection of projects, from
						AI-powered applications to full-stack web solutions
					</motion.p>
				</motion.div>

				{/* Projects Counter */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-center mb-8"
				>
					<div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-full border border-gray-600/30">
						<span className="text-gray-300">Showing </span>
						<span className="mx-1 text-green-400 font-semibold">
							{displayedProjects.length}
						</span>
						<span className="text-gray-300"> of </span>
						<span className="ml-1 text-blue-400 font-semibold">
							{projects.length}
						</span>
						<span className="ml-1 text-gray-300"> projects</span>
					</div>
				</motion.div>

				{/* Projects Grid with AnimatePresence */}
				<AnimatePresence mode="wait">
					<motion.div
						key={showAll ? "all" : "limited"}
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={containerVariants}
						className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12"
					>
						{displayedProjects.map((project, index) => (
							<motion.div
								key={`${project.name}-${index}`}
								variants={itemVariants}
								layout
								layoutId={`project-${project.name}`}
							>
								<ProjectCard
									icon={project.icon}
									name={project.name}
									description={project.description}
									githubLink={project.githubLink}
									index={index}
								/>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>

				{/* Enhanced View More / View Less Button */}
				{hasMoreProjects && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-center"
					>
						<motion.button
							onClick={toggleViewMore}
							disabled={isAnimating}
							whileHover={{
								scale: 1.02,
								boxShadow: "0 8px 25px rgba(34, 197, 94, 0.3)",
							}}
							whileTap={{ scale: 0.95 }}
							className={`group relative overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-green-400/50 hover:border-green-400/60 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 px-10 py-4 ${
								isAnimating
									? "cursor-not-allowed opacity-70"
									: "cursor-pointer"
							}`}
						>
							{/* Subtle Border Glow Effect Only */}
							<motion.div
								className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-green-400/30 transition-all duration-500"
								whileHover={{
									boxShadow:
										"0 0 20px rgba(34, 197, 94, 0.2), inset 0 0 20px rgba(34, 197, 94, 0.1)",
								}}
							/>

							{/* Button Content */}
							<motion.span
								className="relative text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300 flex items-center justify-center"
								animate={
									isAnimating ? { opacity: [1, 0.5, 1] } : {}
								}
								transition={{
									duration: 0.6,
									repeat: isAnimating ? Infinity : 0,
								}}
							>
								{isAnimating ? (
									<>
										<motion.div
											className="mr-3 w-5 h-5 border-2 border-green-400 border-t-transparent rounded-full"
											animate={{ rotate: 360 }}
											transition={{
												duration: 1,
												repeat: Infinity,
												ease: "linear",
											}}
										/>
										{showAll ? "Loading..." : "Loading..."}
									</>
								) : (
									<>
										{showAll
											? "Show Less Projects"
											: "View All Projects"}
										<motion.svg
											className={`ml-3 w-5 h-5 transition-transform duration-300 ${
												showAll ? "rotate-180" : ""
											} group-hover:translate-x-1`}
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											animate={
												showAll
													? { rotate: 180 }
													: { rotate: 0 }
											}
											transition={{ duration: 0.3 }}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</motion.svg>
									</>
								)}
							</motion.span>

							{/* Progress indicator */}
							<div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50 rounded-b-2xl overflow-hidden">
								<motion.div
									className="h-full bg-gradient-to-r from-green-400 to-blue-500"
									initial={{ width: "0%" }}
									animate={{
										width: `${
											(displayedProjects.length /
												projects.length) *
											100
										}%`,
									}}
									transition={{
										duration: 0.8,
										ease: "easeOut",
									}}
								/>
							</div>
						</motion.button>

						{/* Additional Info */}
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className="mt-4 text-sm text-gray-400"
						>
							{showAll
								? "Showing all projects • Click to show featured projects only"
								: `${
										projects.length - initialProjectsToShow
								  } more projects available`}
						</motion.p>
					</motion.div>
				)}
			</div>
		</section>
	);
};
