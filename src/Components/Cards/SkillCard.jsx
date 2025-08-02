import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const SkillCard = ({
	title,
	skills,
	icon = "⚡",
	gradient = "from-green-400 to-blue-500",
}) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.02,
				y: -6,
				transition: {
					duration: 0.2,
				},
			}}
			whileTap={{ scale: 0.95 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
			className="group relative overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-600/30 hover:border-green-400/50 shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
		>
			{/* Subtle Border Glow Effect Only */}
			<div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-green-400/30 transition-all duration-300"></div>

			{/* Content */}
			<div className="relative p-8">
				{/* Icon and Title */}
				<div className="text-center mb-6">
					<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
						{icon}
					</div>
					<h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-green-400 transition-colors duration-300">
						{title}
					</h3>
				</div>

				{/* Skills List */}
				<ul className="space-y-3 text-gray-300">
					{skills.map((skill, index) => (
						<motion.li
							key={index}
							whileHover={{ x: 10 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-green-400 before:opacity-80 hover:text-green-400 transition duration-200 cursor-default"
						>
							<span className="relative">{skill}</span>
						</motion.li>
					))}
				</ul>

				{/* Animated Bottom Border */}
				<div className="mt-6 pt-4 border-t border-gray-600/30">
					<div className="h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				</div>
			</div>
		</motion.div>
	);
};

SkillCard.propTypes = {
	title: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf(PropTypes.string).isRequired,
	icon: PropTypes.string,
	gradient: PropTypes.string,
};
