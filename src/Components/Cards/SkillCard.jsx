import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const SkillCard = ({ title, skills }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }} // Slightly enlarges the card on hover
			whileTap={{ scale: 0.95 }} // Adds a tap feedback effect
			initial={{ opacity: 0, y: 50 }} // Card starts off-screen
			animate={{ opacity: 1, y: 0 }} // Smoothly moves into view
			transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth timing
			className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
		>
			{/* Glitch Effect for Title */}
			<h3 className="relative text-xl font-bold text-[#00FF66] mb-6 text-center group-hover:animate-pulse">
				<span className="absolute inset-0 text-[#8A2BE2] blur-sm opacity-50 group-hover:blur-md">
					{title}
				</span>
				<span className="relative">{title}</span>
			</h3>
			{/* Skill List */}
			<ul className="space-y-2 text-gray-300">
				{skills.map((skill, index) => (
					<motion.li
						key={index}
						whileHover={{ x: 10 }} // Slide the skill slightly to the right on hover
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-[#00FF66] before:opacity-80 hover:text-[#00FF66] transition duration-200"
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</motion.div>
	);
};

SkillCard.propTypes = {
	title: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
