import { motion } from "framer-motion";

export const Intro = () => {
	return (
		<div>
			<section className="mb-16 px-6 md:px-12 py-6 md:py-10">
				{/* Heading */}
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeInOut" }}
					className="text-2xl md:text-3xl text-[#00FF66] mb-6 text-center font-bold"
				>
					Hello Everyone,
				</motion.h2>

				{/* Intro Paragraph */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.2, delay: 0.3 }}
					className="text-base md:text-lg text-gray-300 text-center mb-6"
				>
					I&apos;m{" "}
					<span className="text-[#00FF66] font-bold">
						Abhiraj Dixit
					</span>
					, and I am a passionate and dedicated Full Stack Developer
					with a keen interest in building innovative solutions and
					exploring new technologies. Currently, I am pursuing a
					B.Tech in Computer Science & Data Science at Maharana Pratap
					Engineering College, Kanpur, where I am actively involved in
					software development and AI research. As a third-year
					student, I’ve already contributed to several impactful
					projects, utilizing technologies such as MERN Stack, React
					Native, and AI frameworks like Hugging Face.
				</motion.p>

				{/* More Info Section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{/* GitHub */}
					<motion.a
						href="https://github.com/Aabhiraj412"
						target="_blank"
						className="bg-[#121212] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center text-[#00FF66] hover:text-[#8A2BE2]"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						<h3 className="text-lg font-semibold">GitHub</h3>
						<p className="text-gray-300">
							Explore my projects and repositories on GitHub.
						</p>
					</motion.a>

					{/* LinkedIn */}
					<motion.a
						href="https://www.linkedin.com/in/abhiraj-dixit-960a50244/"
						target="_blank"
						className="bg-[#121212] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center text-[#00FF66] hover:text-[#8A2BE2]"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.6 }}
					>
						<h3 className="text-lg font-semibold">LinkedIn</h3>
						<p className="text-gray-300">
							Connect with me on LinkedIn and stay updated.
						</p>
					</motion.a>

					{/* Leetcode */}
					<motion.a
						href="https://leetcode.com/aabhiraj412/"
						target="_blank"
						className="bg-[#121212] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center text-[#00FF66] hover:text-[#8A2BE2]"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.7 }}
					>
						<h3 className="text-lg font-semibold">Leetcode</h3>
						<p className="text-gray-300">
							Solve coding challenges and improve my algorithm
							skills.
						</p>
					</motion.a>

					{/* GeeksForGeeks */}
					<motion.a
						href="https://www.geeksforgeeks.org/user/abhiraj_dixit/"
						target="_blank"
						className="bg-[#121212] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center text-[#00FF66] hover:text-[#8A2BE2]"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.8 }}
					>
						<h3 className="text-lg font-semibold">GeeksForGeeks</h3>
						<p className="text-gray-300">
							Find my tutorials and problem-solving insights here.
						</p>
					</motion.a>

					{/* Resume */}
					<motion.a
						href="/Resume.pdf"
						target="_blank"
						className="bg-[#121212] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center text-[#00FF66] hover:text-[#8A2BE2]"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1 }}
					>
						<h3 className="text-lg font-semibold">Resume</h3>
						<p className="text-gray-300">
							View my resume and professional experience.
						</p>
					</motion.a>
				</div>
			</section>
		</div>
	);
};
