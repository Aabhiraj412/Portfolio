import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ARDLogo } from "./ARDLogo";

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const navbarRef = useRef(null);

	const handleMenuClick = () => {
		setIsMobileMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				navbarRef.current &&
				!navbarRef.current.contains(event.target)
			) {
				setIsMobileMenuOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const menuItems = [
		"Home",
		"Statistics",
		"Skills",
		"Projects",
		"Achievements",
		"Contact",
	];

	return (
		<div>
			<motion.nav
				ref={navbarRef}
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-xl py-4 px-8 fixed w-full top-0 shadow-2xl z-50 border-b border-gray-600/30"
			>
				<div className="flex justify-between items-center max-w-7xl mx-auto">
					{/* Logo Only */}
					<motion.a
						href="#home"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="flex items-center group"
					>
						<ARDLogo size="4xl" animated={true} />
					</motion.a>

					{/* Desktop Menu */}
					<ul className="hidden md:flex space-x-8">
						{menuItems.map((item, index) => (
							<motion.li
								key={item}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
							>
								<motion.a
									href={`#${item.toLowerCase()}`}
									whileHover={{ scale: 1.1, y: -2 }}
									className="group relative text-gray-300 hover:text-green-400 transition-all duration-300 font-medium tracking-wide px-3 py-2"
								>
									{item}
									<span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100 rounded-full" />

									{/* Hover Background */}
									<div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
								</motion.a>
							</motion.li>
						))}
					</ul>

					{/* Mobile Menu Toggle Button */}
					<div className="md:hidden">
						<motion.button
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="text-gray-300 hover:text-green-400 transition-all duration-300 p-2"
						>
							<motion.div
								animate={
									isMobileMenuOpen
										? { rotate: 180 }
										: { rotate: 0 }
								}
								transition={{ duration: 0.3 }}
							>
								{isMobileMenuOpen ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="w-7 h-7"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="w-7 h-7"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16m-7 6h7"
										/>
									</svg>
								)}
							</motion.div>
						</motion.button>
					</div>
				</div>

				{/* Mobile Menu */}
				<motion.div
					initial={false}
					animate={
						isMobileMenuOpen
							? { blockSize: "auto", opacity: 1 }
							: { blockSize: 0, opacity: 0 }
					}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="md:hidden overflow-hidden"
				>
					<ul className="mt-6 space-y-4 pb-4">
						{menuItems.map((item, index) => (
							<motion.li
								key={item}
								initial={{ opacity: 0, x: -20 }}
								animate={
									isMobileMenuOpen
										? { opacity: 1, x: 0 }
										: { opacity: 0, x: -20 }
								}
								transition={{
									duration: 0.3,
									delay: index * 0.1,
								}}
							>
								<motion.a
									href={`#${item.toLowerCase()}`}
									onClick={handleMenuClick}
									whileHover={{ x: 10, scale: 1.05 }}
									className="group block text-gray-300 hover:text-green-400 transition-all duration-300 font-medium relative py-2 px-4 rounded-lg"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<span className="relative">{item}</span>
									<span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-green-400 to-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100 rounded-full" />
								</motion.a>
							</motion.li>
						))}
					</ul>
				</motion.div>
			</motion.nav>

			{/* Smooth scrolling CSS */}
			<style>
				{`
          html {
            scroll-behavior: smooth;
          }
        `}
			</style>
		</div>
	);
};
