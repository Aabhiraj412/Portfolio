import PropTypes from "prop-types";

export const Border = ({ name, width = "w-full" }) => {
	return (
		<div id={name} className="mb-16 mt-10">
			<hr className={`border-[#00FF66] ${width} border-t-2`} />
		</div>
	);
};

Border.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	width: PropTypes.string,
};
