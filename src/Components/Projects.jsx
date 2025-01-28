import { useState } from "react";
import { Border } from "./Border";
import ProjectCard from "./Cards/ProjectCard";
import projects from "./DATA/Projects/Projects.json";

export const Projects = () => {
	const [showAll, setShowAll] = useState(false); // State to toggle project visibility
	const initialProjectsToShow = 3; // Number of projects to display initially

	// Toggle between showing all projects or limited ones
	const toggleViewMore = () => setShowAll((prev) => !prev);

	return (
		<div>
			<Border name="projects" />

			<div>
				<section className="mb-16">
					<div>
						<h2 className="text-2xl md:text-3xl text-[#00FF66] mb-6 text-center">
							My Projects
						</h2>
					</div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4">
						{/* Display only a limited number of projects initially */}
						{(showAll
							? projects
							: projects.slice(0, initialProjectsToShow)
						).map((project, index) => (
							<ProjectCard
								key={index}
								icon={project.icon}
								name={project.name}
								description={project.description}
								githubLink={project.githubLink}
							/>
						))}
					</div>

					{/* View More / View Less Button */}
					{projects.length > initialProjectsToShow && (
						<div className="mt-8 text-center">
							<button
								onClick={toggleViewMore}
								className="px-6 py-2 text-lg font-semibold rounded-full bg-[#00FF66] text-gray-900 hover:bg-[#8A2BE2] hover:text-white transition duration-300"
							>
								{showAll ? "View Less" : "View More"}
							</button>
						</div>
					)}
				</section>
			</div>
		</div>
	);
};
