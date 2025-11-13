import "./ParallaxBackground.scss"

const ParallaxBackground = () => {
	return (
		<div className="parallax-bg dark:text-white dark:bg-gray-900">
			{/* Layer 1 - Grid Pattern */}
			<div className="parallax-bg__layer parallax-bg__layer--1">
				<div className="parallax-bg__grid"></div>
				<div className="parallax-bg__dots"></div>
			</div>

			{/* Layer 2 - Floating Terms */}
			<div className="parallax-bg__layer parallax-bg__layer--2">
				<div className="parallax-bg__floating-text parallax-bg__floating-text--1">
					<span>INNOVATION</span>
					<span>EXCELLENCE</span>
					<span>KNOWLEDGE</span>
					<span>FUTURE</span>
					<span>LEARNING</span>
					<span>DISCOVERY</span>
				</div>
				<div className="parallax-bg__floating-text parallax-bg__floating-text--2">
					<span>RESEARCH</span>
					<span>EDUCATION</span>
					<span>GROWTH</span>
					<span>SUCCESS</span>
					<span>VISION</span>
					<span>IMPACT</span>
				</div>
			</div>

			{/* Layer 3 - Diagonal Scrolling */}
			<div className="parallax-bg__layer parallax-bg__layer--3">
				<div className="parallax-bg__diagonal parallax-bg__diagonal--1">
					<span>Computer Science</span>
					<span>Business Management</span>
					<span>Engineering</span>
					<span>Health Sciences</span>
					<span>Arts & Design</span>
					<span>Environmental Science</span>
					<span>Computer Science</span>
					<span>Business Management</span>
					<span>Engineering</span>
					<span>Health Sciences</span>
				</div>
				<div className="parallax-bg__diagonal parallax-bg__diagonal--2">
					<span>Innovation</span>
					<span>Excellence</span>
					<span>Leadership</span>
					<span>Discovery</span>
					<span>Achievement</span>
					<span>Progress</span>
					<span>Innovation</span>
					<span>Excellence</span>
					<span>Leadership</span>
					<span>Discovery</span>
				</div>
			</div>

			{/* Layer 4 - Horizontal Scrolling */}
			<div className="parallax-bg__layer parallax-bg__layer--4">
				<div className="parallax-bg__horizontal parallax-bg__horizontal--1">
					<span>🎓</span>
					<span>📚</span>
					<span>🔬</span>
					<span>💡</span>
					<span>🌍</span>
					<span>⚡</span>
					<span>🎓</span>
					<span>📚</span>
					<span>🔬</span>
					<span>💡</span>
					<span>🌍</span>
					<span>⚡</span>
				</div>
			</div>

			{/* Layer 5 - Gradient Orbs */}
			<div className="parallax-bg__layer parallax-bg__layer--5">
				<div className="parallax-bg__orb parallax-bg__orb--1"></div>
				<div className="parallax-bg__orb parallax-bg__orb--2"></div>
				<div className="parallax-bg__orb parallax-bg__orb--3"></div>
			</div>
		</div>
	)
}

export default ParallaxBackground
