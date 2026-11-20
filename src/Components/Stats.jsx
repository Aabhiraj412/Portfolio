import { motion } from "framer-motion";
import { Border } from "./Border";

const problemSolvingStats = [
	{ label: "Problems solved", value: "1,200+", detail: "Across platforms", icon: "🏆", gradient: "from-green-400 to-blue-500" },
	{ label: "LeetCode", value: "550+", detail: "Problems solved", icon: "⚡", gradient: "from-blue-400 to-purple-500" },
	{ label: "GeeksforGeeks", value: "600+", detail: "Problems solved", icon: "📘", gradient: "from-purple-400 to-pink-500" },
];

export const Stats = () => (
	<section className="relative px-6 md:px-12 py-12 md:py-20">
		<div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-600/20" />
		<div className="relative z-10">
			<Border name="statistics" />
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.5 }}
				className="text-center mb-12"
			>
				<h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
					Problem-Solving Snapshot
				</h2>
				<div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full" />
				<p className="mt-5 text-gray-400">Figures from my latest resume</p>
			</motion.div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
				{problemSolvingStats.map((stat, index) => (
					<motion.article
						key={stat.label}
						initial={{ opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.45, delay: index * 0.08 }}
						whileHover={{ y: -4 }}
						className="rounded-2xl border border-gray-600/30 bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-7 text-center shadow-xl"
					>
						<div className="text-3xl mb-3" aria-hidden="true">{stat.icon}</div>
						<p className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</p>
						<h3 className="mt-3 text-lg font-semibold text-gray-100">{stat.label}</h3>
						<p className="mt-1 text-sm text-gray-400">{stat.detail}</p>
					</motion.article>
				))}
			</div>
		</div>
	</section>
);
