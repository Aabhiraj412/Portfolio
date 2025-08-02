import { useState, useEffect } from "react";

export const Intro = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({
				x: (e.clientX / window.innerWidth) * 2 - 1,
				y: (e.clientY / window.innerHeight) * 2 - 1,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
				staggerChildren: 0.15,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 30,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
				type: "spring",
				stiffness: 80,
				damping: 20,
			},
		},
	};

	const linkItems = [
		{
			title: "GitHub",
			link: "https://github.com/Aabhiraj412",
			desc: "Explore my projects and repositories on GitHub.",
			icon: "🚀",
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/abhiraj-dixit-960a50244/",
			desc: "Connect with me on LinkedIn and stay updated.",
			icon: "💼",
		},
		{
			title: "Leetcode",
			link: "https://leetcode.com/aabhiraj412/",
			desc: "Solve coding challenges and improve my algorithm skills.",
			icon: "⚡",
		},
		{
			title: "GeeksForGeeks",
			link: "https://www.geeksforgeeks.org/user/abhiraj_dixit/",
			desc: "Find my tutorials and problem-solving insights here.",
			icon: "📚",
		},
		{
			title: "Resume",
			link: "/Resume.pdf",
			desc: "View my resume and professional experience.",
			icon: "📄",
		},
	];

	return (
		<div className="relative overflow-hidden">
			{/* Subtle Animated Background Elements - Blends with main bg */}
			<div className="absolute inset-0 opacity-10">
				<div
					className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#00FF66]/30 to-[#1A1A1A]/30 rounded-full blur-3xl"
					style={{
						transform: `translate(${mousePosition.x * 10}px, ${
							mousePosition.y * 10
						}px)`,
					}}
				></div>
				<div
					className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#00FF66]/20 to-[#121212]/20 rounded-full blur-3xl"
					style={{
						transform: `translate(${mousePosition.x * -8}px, ${
							mousePosition.y * -8
						}px)`,
					}}
				></div>
			</div>

			{/* Minimal Floating Particles */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(8)].map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-[#00FF66]/30 rounded-full animate-pulse"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 4}s`,
							animationDuration: `${3 + Math.random() * 2}s`,
						}}
					></div>
				))}
			</div>

			{/* Main Content */}
			<div
				className="relative z-10"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<section className="mb-16 px-6 md:px-12 py-12 md:py-20">
					{/* Heading */}
					<div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={itemVariants}
						className="text-center mb-8"
					>
						<h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#00FF66] font-mono">
							Hello Everyone,
						</h2>
						<div className="w-24 h-1 bg-[#00FF66] mx-auto rounded-full"></div>
					</div>

					{/* Intro Paragraph */}
					<div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={itemVariants}
						className="max-w-4xl mx-auto mb-16"
					>
						<div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#333333]/50 shadow-2xl">
							<p className="text-lg md:text-xl text-gray-300 leading-relaxed font-mono">
								I'm{" "}
								<span className="text-[#00FF66] font-bold text-2xl">
									Abhiraj Dixit
								</span>
								, and I am a passionate and dedicated Full Stack
								Developer with a keen interest in building
								innovative solutions and exploring new
								technologies. Currently, I am pursuing a B.Tech
								in Computer Science & Data Science with current
								aggregate of{" "}
								<span className="text-[#00FF66] font-semibold">
									8.4
								</span>{" "}
								at Maharana Pratap Engineering College, Kanpur,
								where I am actively involved in software
								development and AI research. As a third-year
								student, I've already contributed to several
								impactful projects, utilizing technologies such
								as{" "}
								<span className="text-[#00FF66] font-semibold">
									MERN Stack
								</span>
								,{" "}
								<span className="text-[#00FF66] font-semibold">
									React Native
								</span>
								, and{" "}
								<span className="text-[#00FF66] font-semibold">
									AI frameworks
								</span>{" "}
								like Hugging Face.
							</p>
						</div>
					</div>

					{/* Links Grid */}
					<div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={containerVariants}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
					>
						{linkItems.map((item, index) => (
							<div
								key={index}
								variants={itemVariants}
								whileHover={{
									scale: 1.08,
									y: -10,
									rotateY: 5,
									transition: {
										type: "spring",
										stiffness: 300,
										damping: 20,
									},
								}}
								whileTap={{ scale: 0.95 }}
								className="group"
							>
								<a
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="block relative overflow-hidden bg-[#1A1A1A]/60 backdrop-blur-sm rounded-2xl border border-[#333333]/50 shadow-2xl hover:shadow-[#00FF66]/10 hover:border-[#00FF66]/30 transition-all duration-500"
								>
									{/* Subtle Hover Overlay */}
									<div className="absolute inset-0 bg-[#00FF66]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

									{/* Content */}
									<div className="relative p-8 text-center">
										<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
											{item.icon}
										</div>
										<h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-[#00FF66] transition-colors duration-300 font-mono">
											{item.title}
										</h3>
										<p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed font-mono">
											{item.desc}
										</p>

										{/* Animated Arrow */}
										<div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
											<span className="inline-flex items-center text-[#00FF66] text-sm font-medium font-mono">
												Explore
												<svg
													className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M17 8l4 4m0 0l-4 4m4-4H3"
													/>
												</svg>
											</span>
										</div>
									</div>
								</a>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};
