import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const Border = ({ name, width = "w-full" }) => {
	return (
		<div id={name} className="mb-16 mt-10">
			<motion.div
				initial={{ scaleX: 0, opacity: 0 }}
				whileInView={{ scaleX: 1, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className={`${width} h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full`}
			/>
		</div>
	);
};

Border.propTypes = {
	name: PropTypes.string.isRequired,
	width: PropTypes.string,
};
