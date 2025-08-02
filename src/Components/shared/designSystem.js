// Shared design constants for consistent styling

export const GRADIENTS = {
	primary: "from-green-400 to-blue-500",
	secondary: "from-blue-400 to-purple-500",
	tertiary: "from-purple-400 to-pink-500",
	quaternary: "from-pink-400 to-red-500",
	quinary: "from-red-400 to-orange-500",
	senary: "from-orange-400 to-yellow-500",

	// Background gradients
	sectionBg: "from-gray-900/40 via-black/60 to-gray-800/40",
	cardBg: "from-gray-800/70 to-gray-900/70",
	navbarBg: "from-gray-800/80 to-gray-900/80",

	// Text gradients
	heading: "from-green-400 via-blue-500 to-purple-600",
	subheading: "from-green-400 to-blue-500",
};

export const COLORS = {
	primary: {
		green: "green-400",
		blue: "blue-500",
		purple: "purple-600",
	},
	text: {
		primary: "text-gray-100",
		secondary: "text-gray-300",
		tertiary: "text-gray-400",
		accent: "text-green-400",
	},
	border: {
		primary: "border-gray-600/40",
		secondary: "border-gray-600/30",
		accent: "border-green-400/50",
	},
};

export const SHADOWS = {
	card: "shadow-2xl hover:shadow-green-500/25",
	button: "shadow-2xl hover:shadow-green-500/30",
	section: "shadow-2xl",
};

export const SPACING = {
	section: "px-6 md:px-12 py-16 md:py-24",
	card: "p-8",
	button: "px-8 py-4",
};

export const BORDER_RADIUS = {
	card: "rounded-2xl",
	button: "rounded-2xl",
	section: "rounded-3xl",
	small: "rounded-xl",
};

export const BACKDROP_BLUR = {
	light: "backdrop-blur-sm",
	medium: "backdrop-blur-md",
	heavy: "backdrop-blur-xl",
};

export const ANIMATION_DURATIONS = {
	fast: 0.3,
	medium: 0.5,
	slow: 0.8,
	veryLow: 1.2,
};

export const BREAKPOINTS = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1536px",
};
