import { motion } from "framer-motion";
import { Border } from "./Border";
import { SkillCard } from "./Cards/SkillCard";
import achivements from "./DATA/Achivements/Certifications.json";
import activies from "./DATA/Achivements/CoCurricular.json";

export const Achivements = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
				staggerChildren: 0.2,
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

	return (
		<div className="relative px-6 md:px-12 py-12 md:py-20">
			{/* Section Background */}
			<div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-600/20"></div>

			<div className="relative z-10">
				<Border name="achievements" />

				{/* Section Heading */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={itemVariants}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
						My Achievements
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
				</motion.div>

				{/* Achievements Grid */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={containerVariants}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
				>
					<motion.div variants={itemVariants}>
						<SkillCard
							title="Certificates"
							skills={achivements.map((skill) => skill.name)}
							icon="🏆"
							gradient="from-yellow-400 to-orange-500"
						/>
					</motion.div>

					<motion.div variants={itemVariants}>
						<SkillCard
							title="Co-Curricular Achievements"
							skills={activies.map((skill) => skill.name)}
							icon="🎯"
							gradient="from-pink-400 to-red-500"
						/>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};
