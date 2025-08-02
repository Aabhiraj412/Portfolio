// Shared animation variants for consistent UI across components

export const fadeInUp = {
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
			duration: 0.6,
			ease: [0.25, 0.46, 0.45, 0.94],
			type: "spring",
			stiffness: 100,
			damping: 25,
		},
	},
};

export const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.6,
			staggerChildren: 0.1,
			ease: [0.25, 0.46, 0.45, 0.94],
		},
	},
};

export const scaleIn = {
	hidden: {
		opacity: 0,
		scale: 0.8,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export const slideInLeft = {
	hidden: {
		opacity: 0,
		x: -50,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.46, 0.45, 0.94],
		},
	},
};

export const slideInRight = {
	hidden: {
		opacity: 0,
		x: 50,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.46, 0.45, 0.94],
		},
	},
};

export const bounceIn = {
	hidden: {
		opacity: 0,
		scale: 0.3,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 25,
			duration: 0.8,
		},
	},
};

// Hover animations - Updated for better readability and consistency
export const cardHover = {
	scale: 1.02,
	y: -4,
	transition: {
		type: "spring",
		stiffness: 300,
		damping: 25,
	},
};

export const subtleCardHover = {
	scale: 1.01,
	borderColor: "rgba(34, 197, 94, 0.6)",
	boxShadow:
		"0 0 20px rgba(34, 197, 94, 0.2), inset 0 0 20px rgba(34, 197, 94, 0.1)",
	transition: {
		duration: 0.3,
		ease: "easeInOut",
	},
};

export const buttonHover = {
	scale: 1.05,
	boxShadow: "0 8px 25px rgba(34, 197, 94, 0.3)",
	transition: {
		duration: 0.2,
		ease: "easeInOut",
	},
};

// Gradient animations
export const gradientShift = {
	backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
};

export const gradientShiftTransition = {
	duration: 4,
	repeat: Infinity,
	ease: "linear",
};
