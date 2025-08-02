import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Border } from "./Border";
import Loader from "./Cards/Loader";
import PropTypes from "prop-types";

// Move ProgressBar outside to prevent recreation on each render
const ProgressBar = ({
	label,
	solved,
	total,
	color = "from-green-400 to-blue-500",
}) => {
	const percentage = total ? (solved / total) * 100 : 0;

	return (
		<div className="mb-6">
			<div className="flex justify-between items-center mb-2">
				<span className="text-gray-300 font-medium">{label}</span>
				<span className="text-green-400 text-sm font-semibold">
					{solved}/{total}
				</span>
			</div>
			<div className="relative">
				<div className="w-full bg-gray-700/50 rounded-full h-3 backdrop-blur-sm border border-gray-600/30">
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: percentage / 100 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className={`h-full bg-gradient-to-r ${color} rounded-full shadow-lg relative overflow-hidden origin-left`}
					>
						<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
					</motion.div>
				</div>
				<span className="text-xs text-gray-400 mt-1 block">
					{percentage.toFixed(1)}% completed
				</span>
			</div>
		</div>
	);
};

// PropTypes validation for ProgressBar
ProgressBar.propTypes = {
	label: PropTypes.string.isRequired,
	solved: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	color: PropTypes.string,
};

export const Stats = () => {
	const [leetcodeStats, setLeetcodeStats] = useState(null);
	const [loading, setLoading] = useState(true);

	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut",
			},
		},
	};

	// Fetch stats from LeetCode API
	const fetchLeetcodeStats = async () => {
		try {
			const response = await axios.get(
				`https://leetcode-api-faisalshohag.vercel.app/${"aabhiraj412"}`
			);
			setLeetcodeStats(response.data);
		} catch (error) {
			console.error("Error fetching Leetcode data:", error);
		}
	};

	useEffect(() => {
		fetchLeetcodeStats()
			.then(() => setLoading(false))
			.catch((error) =>
				console.error("Error fetching Leetcode stats:", error)
			);
	}, []);

	return (
		<div className="relative px-6 md:px-12 py-12 md:py-20">
			{/* Section Background */}
			<div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-600/20"></div>

			<div className="relative z-10">
				<Border name="statistics" />

				{/* Section Heading */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={itemVariants}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
						My LeetCode Stats
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
				</motion.div>

				{loading ? (
					<div className="flex justify-center items-center h-64">
						<Loader />
					</div>
				) : (
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={itemVariants}
						className="max-w-4xl mx-auto"
					>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{/* Contest Stats Card */}
							<motion.div
								whileHover={{ scale: 1.02, y: -5 }}
								className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 p-8"
							>
								<div className="text-center mb-6">
									<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
										🏆
									</div>
									<h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-green-400 transition-colors duration-300">
										Contest Performance
									</h3>
								</div>

								<div className="space-y-4">
									<div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg border border-gray-600/20">
										<span className="text-gray-300">
											Contest Rating
										</span>
										<span className="text-green-400 font-bold text-lg">
											1,557
										</span>
									</div>
									<div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg border border-gray-600/20">
										<span className="text-gray-300">
											Global Ranking
										</span>
										<span className="text-blue-400 font-bold text-lg">
											190,120/650,495
										</span>
									</div>
									<div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg border border-gray-600/20">
										<span className="text-gray-300">
											Contests Attended
										</span>
										<span className="text-purple-400 font-bold text-lg">
											8
										</span>
									</div>
								</div>
							</motion.div>

							{/* Problem Solving Stats Card */}
							<motion.div
								whileHover={{ scale: 1.02, y: -5 }}
								className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 p-8"
							>
								<div className="text-center mb-6">
									<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
										⚡
									</div>
									<h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-green-400 transition-colors duration-300">
										Problem Solving Progress
									</h3>
								</div>

								<div className="space-y-4">
									<ProgressBar
										label="Easy Problems"
										solved={leetcodeStats?.easySolved || 0}
										total={leetcodeStats?.totalEasy || 1}
										color="from-green-400 to-green-600"
									/>
									<ProgressBar
										label="Medium Problems"
										solved={
											leetcodeStats?.mediumSolved || 0
										}
										total={leetcodeStats?.totalMedium || 1}
										color="from-yellow-400 to-orange-500"
									/>
									<ProgressBar
										label="Hard Problems"
										solved={leetcodeStats?.hardSolved || 0}
										total={leetcodeStats?.totalHard || 1}
										color="from-red-400 to-red-600"
									/>
									<ProgressBar
										label="Total Problems"
										solved={leetcodeStats?.totalSolved || 0}
										total={
											leetcodeStats?.totalQuestions || 1
										}
										color="from-purple-400 to-pink-500"
									/>
								</div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</div>
		</div>
	);
};
