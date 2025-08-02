import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const ARDLogo = ({ size = "md", className = "", animated = false }) => {
	const sizeClasses = {
		sm: { text: "text-xs" },
		md: { text: "text-sm" },
		lg: { text: "text-base" },
		xl: { text: "text-lg" },
		"2xl": { text: "text-2xl" },
		"3xl": { text: "text-3xl" },
		"4xl": { text: "text-4xl" },
	};

	const current = sizeClasses[size];

	return (
		<div
			className={`${className} relative flex items-center justify-center`}
		>
			{/* Simple ARD text with green color and shine effect */}
			<motion.div
				className={`${current.text} font-bold text-green-400 tracking-[0.2em] select-none relative`}
				initial={animated ? { opacity: 0, scale: 0.8 } : {}}
				animate={
					animated
						? {
								opacity: 1,
								scale: 1,
								textShadow: [
									"0 0 5px rgba(34, 197, 94, 0.5)",
									"0 0 10px rgba(34, 197, 94, 0.8)",
									"0 0 15px rgba(34, 197, 94, 1)",
									"0 0 10px rgba(34, 197, 94, 0.8)",
									"0 0 5px rgba(34, 197, 94, 0.5)",
								],
						  }
						: {}
				}
				transition={
					animated
						? {
								duration: 0.8,
								ease: [0.21, 0.47, 0.32, 0.98],
								textShadow: {
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut",
								},
						  }
						: {}
				}
			>
				ARD
			</motion.div>
		</div>
	);
};

ARDLogo.propTypes = {
	size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]),
	className: PropTypes.string,
	animated: PropTypes.bool,
};
