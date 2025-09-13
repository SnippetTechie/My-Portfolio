document.addEventListener("DOMContentLoaded", () => {
	AOS.init({
		duration: 800,
		once: true,
		offset: 100,
		easing: "ease-in-out",
	});

	VANTA.HALO({
		el: "#vanta-hero-bg",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200.0,
		minWidth: 200.0,
		backgroundColor: 0x0f0f1a,
		baseColor: 0x1a1a2e,
		haloColor: 0x00ffff,
		size: 1.2,
		amplitudeFactor: 0.8,
		xOffset: 0.0,
		yOffset: 0.0,
		opacity: 0.85,
	});
});

window.addEventListener("load", function () {
	const loader = document.getElementById("loader");
	loader.style.opacity = "0";
	setTimeout(() => (loader.style.display = "none"), 500);
});