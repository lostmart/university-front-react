const HeroSection = () => {
	return (
		<section className="text-gray-900 dark:text-white transition-colors duration-200 pt-20">
			<div className="max-w-7xl mx-auto px-4 py-24">
				<div className="max-w-3xl">
					<h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
						Shape Your Future Today
					</h2>
					<p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
						Join Horizon University where innovation meets excellence. Discover
						world-class programs designed to transform your ambitions into
						achievements.
					</p>
					<div className="flex gap-4">
						<button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
							Apply Now
						</button>
						<button className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 px-8 py-3 rounded-lg font-semibold transition-colors">
							Learn More
						</button>
					</div>

					<div className="flex gap-12 mt-12">
						<div>
							<div className="text-4xl font-bold text-gray-900 dark:text-white">
								50K+
							</div>
							<div className="text-gray-600 dark:text-gray-400">Students</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-gray-900 dark:text-white">
								200+
							</div>
							<div className="text-gray-600 dark:text-gray-400">Programs</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-gray-900 dark:text-white">
								95%
							</div>
							<div className="text-gray-600 dark:text-gray-400">
								Employment Rate
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
