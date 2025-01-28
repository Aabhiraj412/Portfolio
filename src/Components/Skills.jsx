import { Border } from "./Border";
import { SkillCard } from "./Cards/SkillCard";
import softSkills from "./DATA/Skills/SoftSkills.json";
import technicalSkills from "./DATA/Skills/TechnicalSkills.json";
import basicTechnicalSkills from "./DATA/Skills/OtherSkills.json";
export const Skills = () => {

	return (
		<div>
			<Border name="skills" />
			<div>
				<h2 className="text-2xl md:text-3xl text-[#00FF66] mb-6 text-center">
					My Skills
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Soft Skills Card */}
				<SkillCard
					title="Soft Skills"
					skills={softSkills.map((skill) => skill.name)}
				/>

				{/* Technical Skills Card */}
				<SkillCard
					title="Technical Skills"
					skills={technicalSkills.map((skill) => skill.name)}
				/>

				{/* Basic Technical Skills Card */}
				<SkillCard
					title="Basic Technical Skills"
					skills={basicTechnicalSkills.map((skill) => skill.name)}
				/>
			</div>
		</div>
	);
};
