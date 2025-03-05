import { Achivements } from "./Components/Achivements";
import { Contact } from "./Components/Contact";
import { Hero } from "./Components/Hero";
import { Intro } from "./Components/Intro";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Stats } from "./Components/Stats";

const App = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#121212] text-white font-mono">
			{/* Navbar */}
			<Navbar />
			{/* Hero Section */}
			<Hero />
			{/* Main Content */}
			<main className="mt-12 px-6 md:px-12">
				{/* About Section */}
				<Intro />
				{/* Stats Section */}
				<Stats/>
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
			<footer className="mt-16 py-8 px-6 md:px-12 text-center text-gray-300 border-t border-gray-700">
				<p className="mt-6">
					&copy; 2025 Abhiraj Dixit. All Rights Reserved.
				</p>
			</footer>
		</div>
	);
};

export default App;
