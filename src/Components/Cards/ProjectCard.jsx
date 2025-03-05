import PropTypes from "prop-types";

const ProjectCard = ({ icon, name, description, githubLink }) => {
  return (
    <div className="flex flex-col justify-between max-w-md h-full rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-900 p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      {/* Project Icon */}
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-700 mx-auto">
        <img
          src={icon}
          alt={`${name} icon`}
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Project Details */}
      <div className="mt-6 text-center flex-grow">
        <h2 className="text-2xl font-bold text-[#00FF66]">{name}</h2>
        <p className="mt-4 text-base text-gray-300">{description}</p>
      </div>

      {/* GitHub Link */}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-lg font-semibold text-[#00FF66] hover:text-[#8A2BE2] transition-colors duration-300 self-center"
      >
        View on GitHub
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default ProjectCard;
