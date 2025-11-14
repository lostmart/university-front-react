const FeatureComp = () => {
	return (
		<section className="py-20 dark:bg-gray-900/50 backdrop-blur-sm">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
						Why Choose Horizon University
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400">
						Excellence in every dimension
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					<article className="p-8 shadow-lg transition-colors backdrop-blur-sm dark:shadow-blue-600/10">
						<div className="w-12 h-12 flex items-center justify-center mb-4">
							<span className="text-2xl">🎓</span>
						</div>
						<h3 className="text-xl font-bold mb-3 dark:text-white">
							World-Class Faculty
						</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Learn from industry leaders and renowned researchers
						</p>
					</article>

					<article className="p-8 shadow-lg transition-colors backdrop-blur-sm dark:shadow-blue-600/10">
						<div className="w-12 h-12 flex items-center justify-center mb-4">
							<span className="text-2xl">🌍</span>
						</div>
						<h3 className="text-xl font-bold mb-3 dark:text-white">
							Global Network
						</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Connect with students from 100+ countries worldwide
						</p>
					</article>

					<article className="p-8 shadow-lg transition-colors backdrop-blur-sm dark:shadow-blue-600/20">
						<div className="w-12 h-12 flex items-center justify-center mb-4">
							<span className="text-2xl">💼</span>
						</div>
						<h3 className="text-xl font-bold mb-3 dark:text-white">
							Career Success
						</h3>
						<p className="text-gray-600 dark:text-gray-400">
							95% employment rate within 6 months of graduation
						</p>
					</article>
				</div>
			</div>
		</section>
	)
}

export default FeatureComp
