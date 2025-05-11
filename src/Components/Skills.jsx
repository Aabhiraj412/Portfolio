import { Border } from "./Border";
import { SkillCard } from "./Cards/SkillCard";
import softSkills from "./DATA/Skills/SoftSkills.json";
// import technicalSkills from "./DATA/Skills/TechnicalSkills.json";
// import basicTechnicalSkills from "./DATA/Skills/OtherSkills.json";
import devlopmentSkills from "./DATA/Skills/DevelopmentSkills.json";
import aiml from "./DATA/Skills/AI-ML-GenAI-DataScienceSkills.json";
export const Skills = () => {

	return (
		<div>
			<Border name="skills" />
			<div>
				<h2 className="text-2xl md:text-3xl text-[#00FF66] mb-6 text-center font-bold">
					My Skills
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Soft Skills Card */}
				<SkillCard
					title="Professional Strengths"
					skills={softSkills.map((skill) => skill.name)}
				/>

				{/* Technical Skills Card */}
				<SkillCard
					title="App & Web Development Skills"
					skills={devlopmentSkills.map((skill) => skill.name)}
				/>

				{/* Basic Technical Skills Card */}
				<SkillCard
					title="AI/ML / GenAI / DataScience Skills"
					skills={aiml.map((skill) => skill.name)}
				/>
			</div>
		</div>
	);
};
