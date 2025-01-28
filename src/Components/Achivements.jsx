import { Border } from "./Border";
import { SkillCard } from "./Cards/SkillCard";
import achivements from "./DATA/Achivements/Certifications.json";
import activies from "./DATA/Achivements/CoCurricular.json";

export const Achivements = () => {
	return (
		<div>
			<Border name="achievements" />
			<div>
				<h2 className="text-2xl md:text-3xl text-[#00FF66] mb-6 text-center">
					My Achivements
				</h2>
			</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Soft Skills Card */}
				<SkillCard
					title="Certifications"
					skills={achivements.map((skill) => skill.name)}
				/>
                <SkillCard
					title="Co-Curricular Achivements"
					skills={activies.map((skill) => skill.name)}
				/>

				
				{/* Basic Technical Skills Card */}
				{/* <SkillCard
					title="Basic Technical Skills"
					skills={basicTechnicalSkills.map((skill) => skill.name)}
				/> */}
			</div>
		</div>
	);
};
