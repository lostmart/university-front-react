const ProgramsComp = () => {
	return (
		<section className="py-20">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
						Popular Programs
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400">
						Find your path to success
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{[
						{ title: "Computer Science", students: "2,500+", icon: "💻" },
						{
							title: "Business Management",
							students: "3,200+",
							icon: "📊",
						},
						{ title: "Engineering", students: "4,100+", icon: "⚙️" },
						{ title: "Health Sciences", students: "1,800+", icon: "🏥" },
						{ title: "Arts & Design", students: "1,500+", icon: "🎨" },
						{
							title: "Environmental Science",
							students: "900+",
							icon: "🌱",
						},
					].map((program, index) => (
						<div
							key={index}
							className="border-2 border-gray-200 rounded-sm backdrop-blur-sm p-6 hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer"
						>
							<div className="text-4xl mb-4">{program.icon}</div>
							<h3 className="text-xl font-bold mb-2 dark:text-white">
								{program.title}
							</h3>
							<p className="text-gray-600 mb-4 dark:text-slate-400">
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
	)
}

export default ProgramsComp
