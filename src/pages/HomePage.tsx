const HomePage = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Navigation */}
		

			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
				<div className="max-w-7xl mx-auto px-4 py-24">
					<div className="max-w-3xl">
						<h2 className="text-5xl font-bold mb-6">Shape Your Future Today</h2>
						<p className="text-xl mb-8 text-blue-100">
							Join Horizon University where innovation meets excellence.
							Discover world-class programs designed to transform your ambitions
							into achievements.
						</p>
						<div className="flex gap-4">
							<button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
								Apply Now
							</button>
							<button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10">
								Learn More
							</button>
						</div>

						<div className="flex gap-12 mt-12">
							<div>
								<div className="text-4xl font-bold">50K+</div>
								<div className="text-blue-200">Students</div>
							</div>
							<div>
								<div className="text-4xl font-bold">200+</div>
								<div className="text-blue-200">Programs</div>
							</div>
							<div>
								<div className="text-4xl font-bold">95%</div>
								<div className="text-blue-200">Employment Rate</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Why Choose Horizon University
						</h2>
						<p className="text-xl text-gray-600">
							Excellence in every dimension
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-xl shadow-lg">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
								<span className="text-2xl">🎓</span>
							</div>
							<h3 className="text-xl font-bold mb-3">World-Class Faculty</h3>
							<p className="text-gray-600">
								Learn from industry leaders and renowned researchers
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-lg">
							<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
								<span className="text-2xl">🌍</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Global Network</h3>
							<p className="text-gray-600">
								Connect with students from 100+ countries worldwide
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-lg">
							<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
								<span className="text-2xl">💼</span>
							</div>
							<h3 className="text-xl font-bold mb-3">Career Success</h3>
							<p className="text-gray-600">
								95% employment rate within 6 months of graduation
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Programs */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Popular Programs
						</h2>
						<p className="text-xl text-gray-600">Find your path to success</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{ title: "Computer Science", students: "2,500+", icon: "💻" },
							{ title: "Business Management", students: "3,200+", icon: "📊" },
							{ title: "Engineering", students: "4,100+", icon: "⚙️" },
							{ title: "Health Sciences", students: "1,800+", icon: "🏥" },
							{ title: "Arts & Design", students: "1,500+", icon: "🎨" },
							{ title: "Environmental Science", students: "900+", icon: "🌱" },
						].map((program, index) => (
							<div
								key={index}
								className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer"
							>
								<div className="text-4xl mb-4">{program.icon}</div>
								<h3 className="text-xl font-bold mb-2">{program.title}</h3>
								<p className="text-gray-600 mb-4">
									{program.students} students
								</p>
								<button className="text-blue-600 font-semibold hover:text-blue-700">
									Learn More →
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-6">
						Ready to Start Your Journey?
					</h2>
					<p className="text-xl mb-8 text-blue-100">
						Applications for Fall 2026 are now open
					</p>
					<div className="flex justify-center gap-4">
						<button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
							Apply Now
						</button>
						<button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10">
							Schedule Tour
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-gray-300 py-12">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8 mb-8">
						<div>
							<h3 className="text-white font-bold text-lg mb-4">
								Horizon University
							</h3>
							<p className="text-sm">Shaping tomorrow's leaders</p>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Academics</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<a href="#" className="hover:text-white">
										Programs
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										Admissions
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										Tuition
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Campus</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<a href="#" className="hover:text-white">
										Student Life
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										Housing
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										Athletics
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Connect</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<a href="#" className="hover:text-white">
										Contact
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										Visit
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white">
										News
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="border-t border-gray-800 pt-8 text-center text-sm">
						<p>&copy; 2025 Horizon University. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default HomePage
