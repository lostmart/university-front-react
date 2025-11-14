const CallToAction = () => {
	return (
		<section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white dark:text-slate-800 dark:from-blue-100 dark:to-indigo-200">
			<div className="max-w-4xl mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold mb-6 dark:text-slate-800">
					Ready to Start Your Journey?
				</h2>
				<p className="text-xl mb-8 text-blue-100 dark:text-slate-800">
					Applications for Fall 2026 are now open
				</p>
				<div className="flex justify-center gap-4">
					<button className="text-blue-100 px-8 py-3 rounded-sm font-semibold hover:bg-slate-100  hover:text-blue-600 dark:text-slate-800 dark:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-slate-100">
						Apply Now
					</button>
					<button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 dark:text-blue-600 dark:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white">
						Schedule Tour
					</button>
				</div>
			</div>
		</section>
	)
}

export default CallToAction
