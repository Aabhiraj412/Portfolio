// ARD Logo Generator Script
// This creates an SVG version of the ARD logo for use as favicon and other purposes

const generateARDLogo = () => {
	const svgContent = `
<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradients for each letter -->
    <linearGradient id="gradientA" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="gradientR" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#60a5fa;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="gradientD" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a78bfa;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>

    <!-- Background gradient -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#374151;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#1f2937;stop-opacity:0.9" />
    </linearGradient>

    <!-- Glow effect -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="64" height="64" rx="12" ry="12" fill="url(#bgGradient)" stroke="#4b5563" stroke-width="1" opacity="0.9"/>
  
  <!-- Subtle background glow -->
  <rect x="4" y="4" width="56" height="56" rx="8" ry="8" fill="none" stroke="url(#gradientA)" stroke-width="0.5" opacity="0.3"/>
  
  <!-- Letter A -->
  <rect x="8" y="20" width="14" height="14" rx="3" ry="3" fill="url(#gradientA)" filter="url(#glow)"/>
  <text x="15" y="31" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="white" text-shadow="0 0 4px rgba(255,255,255,0.5)">A</text>
  
  <!-- Letter R -->
  <rect x="25" y="20" width="14" height="14" rx="3" ry="3" fill="url(#gradientR)" filter="url(#glow)"/>
  <text x="32" y="31" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="white" text-shadow="0 0 4px rgba(255,255,255,0.5)">R</text>
  
  <!-- Letter D -->
  <rect x="42" y="20" width="14" height="14" rx="3" ry="3" fill="url(#gradientD)" filter="url(#glow)"/>
  <text x="49" y="31" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="white" text-shadow="0 0 4px rgba(255,255,255,0.5)">D</text>
  
  <!-- Decorative particles -->
  <circle cx="20" cy="16" r="1.5" fill="url(#gradientA)" opacity="0.7"/>
  <circle cx="37" cy="16" r="1.5" fill="url(#gradientR)" opacity="0.7"/>
  <circle cx="54" cy="16" r="1.5" fill="url(#gradientD)" opacity="0.7"/>
  
  <!-- Bottom accent line -->
  <rect x="12" y="42" width="40" height="2" rx="1" ry="1" fill="url(#gradientA)" opacity="0.6"/>
  <rect x="16" y="42" width="32" height="2" rx="1" ry="1" fill="url(#gradientR)" opacity="0.4"/>
  <rect x="20" y="42" width="24" height="2" rx="1" ry="1" fill="url(#gradientD)" opacity="0.3"/>
</svg>`;

	return svgContent.trim();
};

// Export for use in build process
if (typeof module !== "undefined" && module.exports) {
	module.exports = { generateARDLogo };
}

// For browser usage
if (typeof window !== "undefined") {
	window.generateARDLogo = generateARDLogo;
}

console.log("ARD Logo SVG Generator Ready");
console.log("Generated SVG:");
console.log(generateARDLogo());
