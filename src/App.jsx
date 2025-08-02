import { useState, useEffect } from "react";
import { Achivements } from "./Components/Achivements";
import { Contact } from "./Components/Contact";
import { Hero } from "./Components/Hero";
import { Intro } from "./Components/Intro";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Stats } from "./Components/Stats";

const App = () => {
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

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-mono relative overflow-hidden">
			{/* Global Animated Background Elements */}
			<div className="fixed inset-0 opacity-20 pointer-events-none z-0">
				<div
					className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"
					style={{
						transform: `translate(${mousePosition.x * 25}px, ${
							mousePosition.y * 25
						}px)`,
					}}
				></div>
				<div
					className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"
					style={{
						transform: `translate(${mousePosition.x * -20}px, ${
							mousePosition.y * -20
						}px)`,
					}}
				></div>
				<div
					className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"
					style={{
						transform: `translate(-50%, -50%) translate(${
							mousePosition.x * 15
						}px, ${mousePosition.y * 15}px)`,
					}}
				></div>
			</div>

			{/* Global Floating Particles */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className="absolute w-2 h-2 bg-green-400/40 rounded-full animate-bounce"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 5}s`,
							animationDuration: `${3 + Math.random() * 4}s`,
						}}
					></div>
				))}
			</div>

			{/* Main Content Container */}
			<div className="relative z-10">
				{/* Navbar */}
				<Navbar />
				{/* Hero Section */}
				<Hero />
				{/* Main Content */}
				<main className="mt-12">
					{/* About Section */}
					<Intro />
					{/* Stats Section */}
					<Stats />
					{/* Skills Section */}
					<Skills />
					{/* Projects Section */}
					<Projects />
					{/* Achivements Section */}
					<Achivements />
					{/* Contact Section */}
					<Contact />
				</main>

				{/* Footer Section */}
				<footer className="mt-16 py-8 px-6 md:px-12 text-center relative">
					<div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600/30 shadow-2xl">
						<p className="text-gray-300 text-lg">
							&copy; 2025{" "}
							<span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text font-bold">
								Abhiraj Dixit
							</span>
							. All Rights Reserved.
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default App;
