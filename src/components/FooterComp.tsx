const FooterComp = () => {
	const year = new Date().getFullYear()

	return (
		<footer className="bg-gray-900 text-gray-300 py-12">
			<div className="container mx-auto px-4">
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
					<p>&copy; {year} Horizon University. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default FooterComp
