import { useEffect, useState } from "react";
import axios from "axios";
import { Border } from "./Border";
import Loader from "./Cards/Loader";

export const Stats = () => {
	const [leetcodeStats, setLeetcodeStats] = useState(null);
	const [loading, setLoading] = useState(true);

	// Fetch stats from LeetCode API
	const fetchLeetcodeStats = async () => {
		try {
			const response = await axios.get(
				`https://leetcode-api-faisalshohag.vercel.app/${"aabhiraj412"}` // Replace with correct endpoint
			);
			setLeetcodeStats(response.data);
		} catch (error) {
			console.error("Error fetching Leetcode data:", error);
		}
	};

	useEffect(() => {
		// Fetch LeetCode stats when the component mounts
		fetchLeetcodeStats()
			.then(() => setLoading(false))
			.catch((error) =>
				console.error("Error fetching Leetcode stats:", error)
			);
	}, []);

	
	return (
		<div>
			<Border name="statistics" />
			<h2 className="text-2xl md:text-3xl text-[#00FF66] mb-6 text-center font-bold">
				My LeetCode Stats
			</h2>
			{loading ? (
				<div className="flex justify-center items-center h-56">
					<Loader />
				 </div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{/* Leetcode Stats */}
					<div></div>
					<div className="bg-[#121212] p-6 rounded-lg shadow-lg hover:shadow-xl text-center">
						{/* <h3 className="text-lg font-semibold text-[#00FF66] mb-4">
						LeetCode Stats Overview
					</h3> */}

						{/* Rank */}
						<p className="text-gray-300 text-xl mb-2">
							<span className="font-bold text-[#00FF66]">
								Contest Rating:
							</span>{" "}
							1,557
						</p>
						<p className="text-gray-300 text-xl mb-2">
							<span className="font-bold text-[#00FF66]">
								Global Ranking:
							</span>{" "}
							190,120/650,495
						</p>
						<p className="text-gray-300 text-xl mb-2">
							<span className="font-bold text-[#00FF66]">
								Contest Attended:
							</span>{" "}
							8
						</p>
						{/* <p className="text-gray-300 text-xl mb-2">
						<span className="font-bold text-[#00FF66]">Rank:</span>{" "}
						{leetcodeStats?.ranking}
					</p> */}

						{/* Easy Problems Progress */}
						<div className="mb-4">
							<p className="text-gray-300">
								<span className="font-bold text-[#00FF66]">
									Easy Problems Solved:
								</span>
							</p>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<span className="text-gray-300 text-xs">
										{leetcodeStats?.easySolved}/
										{leetcodeStats?.totalEasy}
									</span>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="w-full bg-gray-200 rounded-full">
										<div
											className="bg-[#00FF66] text-xs font-medium text-center p-0.5 leading-none rounded-full"
											style={{
												width: `${
													(leetcodeStats?.easySolved /
														leetcodeStats?.totalEasy) *
													100
												}%`,
											}}
										>
											&nbsp;
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Medium Problems Progress */}
						<div className="mb-4">
							<p className="text-gray-300">
								<span className="font-bold text-[#00FF66]">
									Medium Problems Solved:
								</span>
							</p>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<span className="text-gray-300 text-xs">
										{leetcodeStats?.mediumSolved}/
										{leetcodeStats?.totalMedium}
									</span>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="w-full bg-gray-200 rounded-full">
										<div
											className="bg-[#00FF66] text-xs font-medium text-center p-0.5 leading-none rounded-full"
											style={{
												width: `${
													(leetcodeStats?.mediumSolved /
														leetcodeStats?.totalMedium) *
													100
												}%`,
											}}
										>
											&nbsp;
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Hard Problems Progress */}
						<div className="mb-4">
							<p className="text-gray-300">
								<span className="font-bold text-[#00FF66]">
									Hard Problems Solved:
								</span>
							</p>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<span className="text-gray-300 text-xs">
										{leetcodeStats?.hardSolved}/
										{leetcodeStats?.totalHard}
									</span>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="w-full bg-gray-200 rounded-full">
										<div
											className="bg-[#00FF66] text-xs font-medium text-center p-0.5 leading-none rounded-full"
											style={{
												width: `${
													(leetcodeStats?.hardSolved /
														leetcodeStats?.totalHard) *
													100
												}%`,
											}}
										>
											&nbsp;
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Total Solved Progress */}
						<div className="mb-4">
							<p className="text-gray-300">
								<span className="font-bold text-[#00FF66]">
									Total Problems Solved:
								</span>
							</p>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<span className="text-gray-300 text-xs">
										{leetcodeStats?.totalSolved}/
										{leetcodeStats?.totalQuestions}
									</span>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="w-full bg-gray-200 rounded-full">
										<div
											className="bg-[#00FF66] text-xs font-medium text-center p-0.5 leading-none rounded-full"
											style={{
												width: `${
													(leetcodeStats?.totalSolved /
														leetcodeStats?.totalQuestions) *
													100
												}%`,
											}}
										>
											&nbsp;
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
