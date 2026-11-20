import { motion } from "framer-motion";

const Loader = () => {
	return (
		<div className="flex flex-col items-center justify-center p-8">
			{/* Simple loading spinner */}
			<motion.div
				className="w-16 h-16 border-4 border-gray-300 border-t-green-400 rounded-full"
				animate={{ rotate: 360 }}
				transition={{
					duration: 1,
					repeat: Infinity,
					ease: "linear",
				}}
			/>

			{/* Loading text */}
			<motion.div
				className="mt-4 text-gray-300 text-lg"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				Loading LeetCode Stats...
			</motion.div>
		</div>
	);
};

export default Loader;
