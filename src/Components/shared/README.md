# Shared Design System

This directory contains the shared design system for the portfolio website, providing consistent styling, animations, and interaction patterns across all components.

## 📁 Structure

```
shared/
├── animations.js      # Framer Motion animation variants
├── designSystem.js    # Design tokens and constants
└── README.md         # This documentation
```

## 🎨 Design System (designSystem.js)

### Color Palette

-   **Primary Colors**: Green-to-blue gradients for main elements
-   **Secondary Colors**: Blue-to-purple for accent elements
-   **Tertiary Colors**: Orange-to-red for highlights
-   **Background**: Dark theme with gradient overlays
-   **Text**: Multi-level hierarchy (primary, secondary, tertiary)

### Design Tokens

#### Gradients

```javascript
GRADIENTS = {
	primary: "from-green-400 to-blue-500",
	secondary: "from-blue-400 to-purple-500",
	tertiary: "from-orange-400 to-red-500",
	quaternary: "from-green-400 to-teal-500",
	quinary: "from-purple-400 to-pink-500",
	heading: "from-green-400 via-blue-500 to-purple-600",
	subheading: "from-green-400 to-blue-500",
	cardBg: "from-gray-800/60 to-gray-900/60",
	sectionBg: "from-gray-900 via-black to-gray-800",
};
```

#### Colors

```javascript
COLORS = {
	text: {
		primary: "text-gray-100",
		secondary: "text-gray-200",
		tertiary: "text-gray-400",
	},
	border: {
		primary: "border-gray-600/30",
		secondary: "border-gray-500/20",
	},
};
```

#### Spacing

```javascript
SPACING = {
	section: "px-6 md:px-12 py-12 md:py-20",
	card: "p-6 md:p-8",
	cardSmall: "p-4 md:p-6",
};
```

#### Layout

```javascript
BORDER_RADIUS = {
	card: "rounded-2xl",
	button: "rounded-xl",
};

BACKDROP_BLUR = {
	light: "backdrop-blur-sm",
	medium: "backdrop-blur-md",
	heavy: "backdrop-blur-xl",
};
```

## ✨ Animations (animations.js)

### Container Animations

-   **staggerContainer**: Parent container with staggered child animations
-   **staggerContainerFast**: Faster stagger timing for quick reveals

### Item Animations

-   **fadeInUp**: Fade in from bottom with smooth easing
-   **fadeInScale**: Fade in with scaling effect
-   **slideInLeft/Right**: Slide animations from sides

### Interaction Animations

-   **cardHover**: 3D hover effect with scale and rotation
-   **buttonHover**: Button-specific hover animation
-   **iconBounce**: Playful bounce animation for icons

### Usage Example

```jsx
import { staggerContainer, fadeInUp, cardHover } from "./shared/animations";

<motion.div variants={staggerContainer} initial="hidden" animate="visible">
	<motion.div variants={fadeInUp} whileHover={cardHover}>
		Card Content
	</motion.div>
</motion.div>;
```

## 🎯 Implementation Guidelines

### 1. Glass Morphism Style

All cards use consistent glass morphism with:

-   Semi-transparent backgrounds
-   Backdrop blur effects
-   Subtle borders
-   Gradient overlays on hover

### 2. Animation Patterns

-   **Staggered Entry**: Use staggerContainer for multiple items
-   **3D Hover Effects**: Apply cardHover to interactive cards
-   **Smooth Transitions**: 300-500ms duration for most interactions
-   **Spring Physics**: Use for natural feeling animations

### 3. Color Usage

-   **Gradients**: Apply to backgrounds, text, and borders
-   **Hierarchy**: Use text color levels for information hierarchy
-   **Consistency**: Stick to defined color palette

### 4. Responsive Design

-   **Mobile First**: All components are mobile-responsive
-   **Breakpoints**: Use md: prefix for desktop adaptations
-   **Flexible Grids**: Use CSS Grid with responsive columns

## 🚀 Component Integration

### Basic Card Pattern

```jsx
import {
	GRADIENTS,
	COLORS,
	SPACING,
	BORDER_RADIUS,
	BACKDROP_BLUR,
} from "./shared/designSystem";
import { fadeInUp, cardHover } from "./shared/animations";

<motion.div
	variants={fadeInUp}
	whileHover={cardHover}
	className={`
    bg-gradient-to-br ${GRADIENTS.cardBg} 
    ${BACKDROP_BLUR.heavy} 
    ${BORDER_RADIUS.card} 
    ${SPACING.card} 
    border ${COLORS.border.primary} 
    shadow-2xl
  `}
>
	Card Content
</motion.div>;
```

### Button Pattern

```jsx
<motion.button
	whileHover={buttonHover}
	whileTap={{ scale: 0.95 }}
	className={`
    bg-gradient-to-r ${GRADIENTS.primary}
    ${BORDER_RADIUS.button}
    px-6 py-3 font-medium ${COLORS.text.primary}
    shadow-lg hover:shadow-green-500/25
  `}
>
	Button Text
</motion.button>
```

## 🔧 Maintenance

### Adding New Variants

When adding new animation variants:

1. Follow existing naming conventions
2. Include smooth easing curves
3. Test on different screen sizes
4. Document usage examples

### Extending Design Tokens

When adding new design tokens:

1. Use semantic naming (primary, secondary, etc.)
2. Maintain color contrast ratios
3. Test in both light and dark contexts
4. Update this documentation

### Performance Considerations

-   Use `will-change` CSS property sparingly
-   Prefer `transform` and `opacity` for animations
-   Implement `AnimatePresence` for mount/unmount animations
-   Use `layoutId` for shared element transitions

## 📚 References

-   [Framer Motion Documentation](https://www.framer.com/motion/)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [CSS Glass Morphism Guide](https://css.glass/)
-   [Animation Best Practices](https://web.dev/animations/)
